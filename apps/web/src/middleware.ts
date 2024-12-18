import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { refreshToken } from './actions/common/refreshToken';
import { routes } from './components/config/routes';

const withAuth = async (req: NextRequest, token: boolean) => {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  if (!token) {
    url.pathname = routes.signIn;
    url.search = `callbackUrl=${pathname}`;
    return NextResponse.redirect(url);
  }
};

const FALLBACK_URL = '/login';

const withOutAuth = async (
  req: NextRequest,
  token: boolean,
  to: string | null
) => {
  const url = req.nextUrl.clone();
  if (token) {
    url.pathname = to ?? FALLBACK_URL;
    url.search = '';
    return NextResponse.redirect(url);
  }
};

// const withOutAuthList = [routes.signIn];
const withAuthList = ['/mypage'];

export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const accessToken = token?.accessToken;
  const { searchParams } = request.nextUrl;
  const callbackUrl = searchParams.get('callbackUrl');
  const { pathname } = request.nextUrl;

  const isWithAuth = withAuthList.some((route) => pathname.startsWith(route));
  if (isWithAuth) {
    return withAuth(request, !!accessToken);
  } else {
    withOutAuth(request, !!accessToken, callbackUrl);
  }

  if (!accessToken || isTokenExpired(accessToken)) {
    if (token?.refreshToken) {
      try {
        const newTokens = await refreshToken(token?.refreshToken);
        if (newTokens) {
          const response = NextResponse.next();
          response.cookies.set('accessToken', newTokens.accessToken, {
            httpOnly: true,
          });
          return response;
        }
      } catch (error) {
        console.error('리프레시 토큰 요청 실패:', error);
      }
    }
  }
}
function isTokenExpired(token: string): boolean {
  const payload = JSON.parse(atob(token.split('.')[1])); // JWT 디코딩
  const currentTime = Math.floor(Date.now() / 1000); // 초 단위 현재 시간
  return payload.exp < currentTime;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};

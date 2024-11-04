export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    // login, join, 루트 경로(/) 및 Next.js 시스템 경로 제외
    '/((?!login|join|api|findId|findPassword|_next/static|_next/image|favicon.ico|$|asset).*)',
  ],
};

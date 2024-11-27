import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import { refreshToken } from 'src/actions/common/refreshToken';

// Kakao 프로필 타입 정의
interface KakaoProfile {
  kakao_account?: {
    email?: string;
    profile?: {
      nickname?: string;
      profile_image_url?: string;
    };
  };
}

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        loginId: { label: 'id', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.loginId || !credentials?.password) {
          return null;
        }
        const payload = {
          accountId: credentials.loginId,
          password: credentials.password,
        };
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth-service/api/v1/auth/sign-in`,
            {
              method: 'POST',
              body: JSON.stringify(payload),
              headers: { 'Content-Type': 'application/json' },
            }
          );
          if (res.ok) {
            const user = await res.json();

            return user.result;
          }
          //  return null;
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === 'kakao') {
        try {
          console.log('kakao');
          const kakaoProfile = profile as KakaoProfile;
          const result = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth-service/api/v1/auth/oauth-sign-in`,
            {
              method: 'POST',
              body: JSON.stringify({
                provider: account.provider,
                providerId: account.providerAccountId,
                providerEmail: kakaoProfile?.kakao_account?.email,
              }),
              headers: { 'Content-Type': 'application/json' },
            }
          );
          const data = await result.json();
          if (result.ok) {
            user.role = data.result.role;
            user.accessToken = data.result.accessToken;
            user.refreshToken = data.result.refreshToken;
            user.uuid = data.result.uuid;
            return true;
          } else if ((data.code = 2105)) {
            console.log('2105면 회원등록 필요');
            const email = kakaoProfile?.kakao_account?.email;
            const name = kakaoProfile.kakao_account?.profile?.nickname;
            console.log(name);
            // const profile_image_url =
            //   kakaoProfile.kakao_account?.profile?.nickname;
            return `/join?path=account&name=${encodeURIComponent(name ? name : '')}&email=${email}`;
          }
          if (result.status === 401) {
            const provider = account.provider;
            const providerAccountId = account.providerAccountId;
            return `/login?provider=${provider}&providerAccountId=${providerAccountId}`;
          }
        } catch (error) {
          console.error('Kakao sign-in error:', error);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.uuid = user.uuid;
        token.role = user.role;
      }

      const payload = JSON.parse(atob(token.accessToken.split('.')[1]));
      const expiredDate = new Date(payload.exp * 1000);

      if (Date.now() > expiredDate.getTime() && token.refreshToken) {
        console.log('토큰 만료됨...');
        try {
          const data = await refreshToken(token.refreshToken as string);
          token.accessToken = data.result.accessToken; // 갱신된 AccessToken 저장
          if (data.ok) {
            console.log('토큰 재발급 성공');
          }
        } catch (error) {
          console.error('refreshToken 만료:', error);
          // 토큰 갱신 실패 시 redirect 플래그 추가
          token.redirect = true;
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.uuid = token.uuid;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      if (token.redirect) {
        session.error = 'TokenExpired';
      }
      return session;
    },
  },

  pages: {
    signIn: '/login',
    error: '/login?error=loginError',
  },
};

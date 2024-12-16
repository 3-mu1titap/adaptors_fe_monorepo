import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import { getProfileImage } from 'src/actions/profile/getProfileData';

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
            `${process.env.NEXT_PUBLIC_AUTH}/api/v1/auth/sign-in`,
            {
              method: 'POST',
              body: JSON.stringify(payload),
              headers: { 'Content-Type': 'application/json' },
            }
          );
          const data = await res.json();

          // 백엔드 응답 구조에 맞게 조건 수정
          if (data.isSuccess && data.result) {
            return data.result;
          }
        } catch (error) {
          console.error('인증 오류:', error);
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
          const kakaoProfile = profile as KakaoProfile;
          const result = await fetch(
            `${process.env.NEXT_PUBLIC_AUTH}/api/v1/auth/oauth-sign-in`,
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
          if (result.ok) {
            const data = await result.json();
            user.role = data.result.role;
            user.accessToken = data.result.accessToken;
            user.refreshToken = data.result.refreshToken;
            user.uuid = data.result.uuid;
            return true;
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
        token.role = user.role;
      }

      // if (token) {
      //   const payload = JSON.parse(atob(token.accessToken.split('.')[1]));
      //   const expiredDate = new Date(payload.exp * 1000);
      //   if (Date.now() > expiredDate.getTime() && token.refreshToken) {
      //     try {
      //       const data = await refreshToken(token.refreshToken as string);
      //       token.accessToken = data.result.accessToken; // 갱신된 AccessToken 저장
      //       if (data.ok) {
      //         console.log('토큰 재발급 성공');
      //       }
      //     } catch (error) {
      //       // console.error('refreshToken 만료:', error);
      //       token.error = 'refreshTokenExpired';
      //     }
      //   }
      // }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.uuid = token.uuid;
        session.user.role = token.role;
        const profileData = await getProfileImage(token.uuid);
        session.user.profileImageUrl = profileData.profileImageUrl;
        session.user.nickName = profileData.nickName;
      }
      // if (token.error) {
      //   session.error = token.error; // 에러 상태를 세션으로 전달
      // }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login?error=loginError',
  },
};

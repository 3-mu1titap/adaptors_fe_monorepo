import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

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

        try {
          const res = await fetch(
            `${process.env.BACKEND_URL}/api/v1/auth/oauth-sign-in`,
            {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { 'Content-Type': 'application/json' },
            }
          );

          if (res.ok) {
            const user = await res.json();
            return user.data;
          }
          return null;
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
    async signIn({ profile, user, account }) {
      if (account?.provider === 'kakao') {
        try {
          const result = await fetch(
            `${process.env.BACKEND_URL}/api/v1/auth/oauth-sign-in`,
            {
              method: 'POST',
              body: JSON.stringify({
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              }),
              headers: { 'Content-Type': 'application/json' },
            }
          );

          if (result.ok) {
            const data = await result.json();
            return true;
          }

          if (result.status === 401) {
            const provider = account.provider;
            const providerAccountId = account.providerAccountId;
            return `/login?provider=${provider}&providerAccountId=${providerAccountId}`;
          }

          throw new Error('Kakao 로그인 중 오류 발생');
        } catch (error) {
          console.error('Kakao sign-in error:', error);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user, account }) {
      if (user && account) {
        token.accessToken = user.accessToken;
        token.name = user.name;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.name = token.name;
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/error',
  },
};

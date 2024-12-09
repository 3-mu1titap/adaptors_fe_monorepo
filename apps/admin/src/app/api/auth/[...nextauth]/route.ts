import NextAuth from 'next-auth';
import { options } from './options'; // options 파일의 실제 경로에 맞게 수정하세요

const handler = NextAuth(options);

export { handler as GET, handler as POST };

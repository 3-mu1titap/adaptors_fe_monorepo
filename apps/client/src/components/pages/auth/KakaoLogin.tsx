'use client';
import { signIn } from 'next-auth/react';
import KakaoLogo from '../../assets/icons/KakaoLogo';

export default function KakaoLogin() {
  return (
    <button
      className="max-w-[400px] w-full h-14 mx-auto bg-[#FFE300] font-bold flex items-center justify-center gap-2"
      onClick={() =>
        signIn('kakao', {
          redirect: true,
          callbackUrl: '/',
        })
      }
    >
      <KakaoLogo />
      카카오로 시작
    </button>
  );
}

'use client';
import { signIn } from 'next-auth/react';
import KakaoLogo from '../../assets/icons/KakaoLogo';

export default function KakaoLogin() {
  return (
    <button
      className="flex items-center justify-center px-4 py-2 border rounded-lg bg-white hover:bg-gray-50 transition-colors gap-2                      "
      onClick={() =>
        signIn('kakao', {
          redirect: true,
          callbackUrl: '/',
        })
      }
    >
      <KakaoLogo />
      Kakao
    </button>
  );
}

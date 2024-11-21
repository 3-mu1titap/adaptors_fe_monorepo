'use client';
import { Eye, EyeOff } from 'lucide-react';
import { getSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginForm() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get('id') as string;
    const pw = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        loginId: id,
        password: pw,
        redirect: false,
      });

      if (result?.error) {
        setLoginError('아이디 혹은 비밀번호가 일치하지 않습니다.');
      } else {
        const updatedSession = await getSession();
        if (updatedSession) {
          const role = updatedSession.user?.role;

          // role에 따라 페이지 라우팅
          if (role === 'MENTEE') {
            router.push('/home');
          } else if (role === 'MENTOR') {
            router.push('/mentor');
          }
        }
      }
    } catch (error) {
      console.error(error);
      setLoginError('로그인 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <input
          className="w-full px-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="아이디"
          type="text"
          name="id"
        />
      </div>
      <div className="space-y-2 relative">
        <input
          className="w-full px-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="패스워드"
          type={showPassword ? 'text' : 'password'}
          name="password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[22%] translate-y-[-25%] text-gray-500"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle password visibility</span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <Link href="/findId" className="text-md text-gray-600 hover:underline">
          아이디 찾기
        </Link>
        <Link
          href="/findPassword"
          className="text-md text-gray-600 hover:underline"
        >
          패스워드가 기억이 나지 않나요?
        </Link>
      </div>
      {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
      <button
        className="w-full h-12 bg-adaptorsYellow text-md text-white font-semibold py-3.5 rounded-xl hover:bg-[#ffc635] transition-colors"
        type="submit"
      >
        SIGN IN
      </button>
    </form>
  );
}

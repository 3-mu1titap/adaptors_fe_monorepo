'use client';

import NextButton from '@repo/web/components/ui/Button/NextButton';
import { Input } from '@repo/web/components/ui/input/CommonInput';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import IdAndPassword from './IdAndPassword';
import PasswordViewer from './PasswordViewer';

export default function LoginForm({ id, pw }: { id?: string; pw?: string }) {
  if (id && pw) {
    useEffect(() => {
      const autoLogin = async () => {
        await signIn('credentials', {
          loginId: id,
          password: pw,
          redirect: false,
        });
      };
      autoLogin();
    }, []);
  }
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
      if (result?.status == 401) {
        setLoginError('아이디 혹은 비밀번호가 일치하지 않습니다.');
      } else if (result?.status == 200) {
        router.push('/home');
      }
    } catch (error) {
      console.error(error);
      setLoginError('로그인 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <form className="space-y-2 pb-2" onSubmit={handleSubmit}>
      <Input placeholder="아이디" type="text" name="id" />
      <fieldset className="relative mb-2">
        <Input
          placeholder="패스워드"
          type={showPassword ? 'text' : 'password'}
          name="password"
        />
        <PasswordViewer
          isTrue={showPassword}
          onClick={() => setShowPassword(!showPassword)}
        />
      </fieldset>
      <IdAndPassword />
      {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
      <NextButton
        text="로그인"
        colorType="primary"
        textColor="text-white"
        type="submit"
      />
    </form>
  );
}

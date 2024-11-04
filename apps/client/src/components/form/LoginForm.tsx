'use client';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import JoinInput from '../ui/input/JoinInput';

export default function LoginForm() {
  const [loginError, setLoginError] = useState<string | null>(null); // 에러 메시지 상태
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const clearId = () => setId('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await signIn('credentials', {
        loginId: id,
        password: pw,
        redirect: false,
      });

      if (result?.error) {
        setLoginError('아이디 혹은 비밀번호가 일치하지 않습니다.');
      } else {
        setLoginError(null);
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
      setLoginError('로그인 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <form className="max-w-[400px] mx-auto " onSubmit={handleSubmit}>
      <JoinInput
        signInInput={{
          text: '아이디',
          value: id,
          name: 'id',
          setValue: setId,
          clearValue: clearId,
        }}
      />
      <JoinInput
        signInInput={{
          text: '비밀번호',
          value: pw,
          name: 'password',
          setValue: setPw,
          clearValue: clearId,
        }}
      />
      {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

      <button
        type="submit"
        className="w-full mt-6 mb-3 bg-zinc-700 h-14 text-white rounded-lg font-bold"
      >
        로그인하기
      </button>
    </form>
  );
}

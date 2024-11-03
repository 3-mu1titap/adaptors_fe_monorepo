'use client';
import { useState } from 'react';
import JoinInput from '../ui/input/JoinInput';

export default function FindPasswordForm() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const clearId = () => setEmail('');
  return (
    <form className=" max-w-[400px] mx-auto">
      <JoinInput
        signInInput={{
          text: '이메일',
          value: email,
          name: 'email',
          setValue: setEmail,
          clearValue: clearId,
          verify: '이메일 인증',
        }}
      />
      <JoinInput
        signInInput={{
          text: '임시 비밀번호',
          value: code,
          name: 'code',
          setValue: setCode,
          clearValue: clearId,
        }}
      />
      <JoinInput
        signInInput={{
          text: '비밀번호 재설정',
          value: code,
          name: 'code',
          setValue: setCode,
          clearValue: clearId,
          verify: '비밀번호 변경',
        }}
      />
    </form>
  );
}

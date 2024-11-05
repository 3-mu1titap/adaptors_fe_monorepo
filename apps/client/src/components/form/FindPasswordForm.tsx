'use client';
import { useState } from 'react';
import JoinInput from '../ui/input/JoinInput';

export default function FindPasswordForm() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const clearId = () => setEmail('');

  const verifyEmail = () => {
    //이메일 인증번호 요청 로직
  };
  const changePassword = () => {
    //비밀번호 재설정
  };
  return (
    <div className=" max-w-[400px] mx-auto mt-5">
      <JoinInput
        signInInput={{
          text: '이메일',
          value: email,
          name: 'email',
          setValue: setEmail,
          clearValue: clearId,
          verify: '이메일 인증',
          onClickVerifyButton: verifyEmail,
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
          value: newPassword,
          name: 'newPassword',
          setValue: setNewPassword,
          clearValue: clearId,
          verify: '비밀번호 변경',
          onClickVerifyButton: changePassword,
        }}
      />
    </div>
  );
}

'use client';
import { useState } from 'react';
import JoinInput from '../ui/input/JoinInput';

export default function FindIdForm() {
  const [id, setId] = useState('');
  const [code, setCode] = useState('');
  const clearId = () => setId('');
  const verifyEmail = () => {
    //이메일 인증번호 요청 로직
  };
  const getUserIdByEmail = () => {
    //인증하고 아이디 찾기
  };
  return (
    <div className=" max-w-[400px] mx-auto  mt-5">
      <JoinInput
        signInInput={{
          text: '이메일 인증하기',
          value: id,
          name: 'id',
          setValue: setId,
          clearValue: clearId,
          verify: '인증번호 요청',
          onClickVerifyButton: verifyEmail,
        }}
      />
      <JoinInput
        signInInput={{
          text: '인증번호',
          value: code,
          name: 'code',
          setValue: setCode,
          clearValue: clearId,
          verify: '인증하기',
          onClickVerifyButton: getUserIdByEmail,
        }}
      />
    </div>
  );
}

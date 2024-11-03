'use client';
import { useState } from 'react';
import JoinInput from '../ui/input/JoinInput';

export default function FindIdForm() {
  const [id, setId] = useState('');
  const [code, setCode] = useState('');
  const clearId = () => setId('');
  return (
    <form className=" max-w-[400px] mx-auto">
      <JoinInput
        signInInput={{
          text: '아이디',
          value: id,
          name: 'id',
          setValue: setId,
          clearValue: clearId,
          verify: '인증번호 요청',
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
        }}
      />
    </form>
  );
}

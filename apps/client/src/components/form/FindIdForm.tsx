'use client';
import { findId } from '@repo/client/actions/auth/auth';
import { useState } from 'react';
import JoinInput from '../ui/input/JoinInput';

export default function FindIdForm() {
  const [email, setId] = useState('');
  const [success, setSuccess] = useState(false);
  const clearId = () => setId('');
  const verifyEmail = async () => {
    const data = await findId(email);
    if (data) {
      setSuccess(true);
    }
  };

  return (
    <div className=" max-w-[400px] mx-auto  mt-5">
      <JoinInput
        signInInput={{
          text: '이메일',
          value: email,
          name: 'email',
          setValue: setId,
          clearValue: clearId,
        }}
      />
      <button
        onClick={verifyEmail}
        className="w-full bg-adaptorsYellow text-black font-semibold py-2.5 rounded-lg hover:bg-[#ffc635] transition-colors"
      >
        아이디 찾기
      </button>
      {success && (
        <p className="text-center pt-3 text-black">
          📮 등록된 이메일로 아이디를 발송했습니다
        </p>
      )}
    </div>
  );
}

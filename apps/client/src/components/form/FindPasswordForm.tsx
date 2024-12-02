'use client';
import { resetPassword } from '@repo/client/actions/auth/auth';
import { useState } from 'react';
import JoinInput from '../ui/input/JoinInput';

export default function FindPasswordForm() {
  const [id, setId] = useState('');
  const clearId = () => setId('');
  const [success, setSuccess] = useState(false);
  const verifyId = async () => {
    const data = await resetPassword(id);
    if (data) {
      setSuccess(true);
    }
  };
  return (
    <div className=" max-w-[400px] mx-auto mt-5">
      <JoinInput
        signInInput={{
          text: '아이디를 입력해주세요',
          value: id,
          name: 'id',
          setValue: setId,
          clearValue: clearId,
        }}
      />
      <button
        onClick={verifyId}
        className="w-full bg-adaptorsYellow text-black font-semibold py-2.5 rounded-lg hover:bg-[#ffc635] transition-colors"
      >
        비밀번호 재설정
      </button>
      {success && (
        <p className="text-center pt-3 text-black">
          📮 등록된 이메일로 새로운 비밀번호를 발송했습니다
        </p>
      )}
    </div>
  );
}

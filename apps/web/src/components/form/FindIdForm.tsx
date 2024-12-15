'use client';
import NextButton from '@repo/web/components/ui/Button/NextButton';
import { Input } from '@repo/web/components/ui/input/CommonInput';
import { useState } from 'react';
import { findId } from '../../actions/auth/auth';
export default function FindIdForm() {
  const [success, setSuccess] = useState('');

  const verifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const data = await findId(email);
    if (data) {
      setSuccess(data);
    }
  };

  return (
    <form className=" max-w-[400px] mx-auto  mt-5" onSubmit={verifyEmail}>
      <Input placeholder="email" type={'text'} name="email" />
      <NextButton
        text="아이디 찾기"
        colorType="primary"
        textColor="text-white"
        type="submit"
      />
      <p
        className={`text-center pt-3 text-black ${success ? 'block' : 'invisible'}`}
      >
        📮 {success}
      </p>
    </form>
  );
}

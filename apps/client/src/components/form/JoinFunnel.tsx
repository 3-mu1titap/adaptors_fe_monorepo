'use client';
import { useState } from 'react';
import { z } from 'zod';
import Funnel from '../common/Funnel/Funnel';
import useFunnel from '../common/Funnel/useFunnel';
import JoinField1 from '../pages/member/JoinField1';

const signUpSchema = z.object({
  name: z.string().nonempty({ message: '이름을 입력해주세요.' }),
  nickname: z.string().nonempty({ message: '닉네임을 입력해주세요.' }),
  id: z.string().min(5, { message: '아이디는 최소 5자 이상이어야 합니다.' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
  confirmPassword: z
    .string()
    .min(8, { message: '비밀번호가 일치하지 않습니다' }),
  phone_number: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, {
    message: '전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)',
  }),
  email: z.string().email({ message: '유효한 이메일을 입력해주세요.' }),
  role: z.enum(['MENTOR', 'MENTEE'], { message: '역할을 선택해주세요.' }),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

export default function JoinFunnel() {
  const steps = ['step1', 'step2'];
  const { level, step, onNextStep, onPrevStep } = useFunnel({ steps });

  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    nickname: '',
    id: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    email: '',
    role: 'MENTEE',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpFormData, string>>
  >({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('제출');
    console.log(formData);
  };

  return (
    <form className="max-w-[400px] mx-auto" onSubmit={handleSubmit}>
      <Funnel step={step}>
        <Funnel.Step name="step1">
          <JoinField1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
          <button
            type="button"
            className="w-full px-4 py-2 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448]"
            onClick={onNextStep}
          >
            NEXT
          </button>
        </Funnel.Step>
        <Funnel.Step name="step2">2</Funnel.Step>
      </Funnel>
    </form>
  );
}

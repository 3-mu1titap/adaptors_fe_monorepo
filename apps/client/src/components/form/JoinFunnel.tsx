'use client';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { postUserData } from '../../actions/auth/auth';
import Funnel from '../common/Funnel/Funnel';
import useFunnel from '../common/Funnel/useFunnel';
import FunnelLevel from '../pages/member/FunnelLevel';
import JoinField1 from '../pages/member/JoinField1';
import JoinField2 from '../pages/member/JoinField2';

const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/;
const signUpSchema = z.object({
  name: z.string().nonempty({ message: '이름을 입력해주세요.' }),
  nickName: z.string().nonempty({ message: '닉네임을 입력해주세요.' }),
  accountId: z
    .string()
    .min(5, { message: '아이디는 최소 5자 이상이어야 합니다.' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
    .regex(specialCharRegex, '비밀번호에 특수문자가 포함되어야 합니다.'),
  confirmPassword: z
    .string()
    .min(8, { message: '비밀번호가 일치하지 않습니다' }),
  phoneNumber: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, {
    message: '전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)',
  }),
  email: z.string().email({ message: '유효한 이메일을 입력해주세요.' }),
  role: z.enum(['MENTOR', 'MENTEE'], { message: '역할을 선택해주세요.' }),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

export default function JoinFunnel() {
  const steps = ['step1', 'step2'];
  const { level, step, onNextStep, onPrevStep } = useFunnel({ steps });
  const [isFormValid, setIsFormValid] = useState(false);
  const [confirmId, setConfirmId] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    nickName: '',
    accountId: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
    role: 'MENTEE',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpFormData, string>>
  >({});

  // 전체 폼 유효성 검사
  const validateForm = () => {
    try {
      signUpSchema.parse(formData);
      if (formData.password !== formData.confirmPassword) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  // 개별 필드 유효성 검사
  const validateField = (fieldName: keyof SignUpFormData, value: string) => {
    try {
      signUpSchema.shape[fieldName].parse(value);
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: error.errors[0].message,
        }));
      }
    }
  };

  // formData가 변경될 때마다 전체 폼 유효성 검사 실행
  useEffect(() => {
    const isValid = validateForm();
    setIsFormValid(isValid);
  }, [formData]);

  //폼 제출 (회원가입 api 요청)
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      signUpSchema.parse(formData);
      setErrors({});
      // 데이터 전송
      const data = await postUserData(formData);
      console.log('회원가입 요청 응답:', data.result);
    } catch (validationError) {}
  };

  const onClickNext = () => {
    validateField('accountId', formData.accountId);
    validateField('password', formData.password);
    validateField('email', formData.email);
    const disable =
      confirmId &&
      formData.accountId &&
      formData.password &&
      formData.email &&
      !errors.accountId &&
      !errors.password &&
      !errors.email &&
      formData.password == confirmPassword;
    if (disable) {
      onNextStep();
    }
  };

  return (
    <div>
      <FunnelLevel level={level} />
      <form className="max-w-[400px] mx-auto">
        <Funnel step={step}>
          <Funnel.Step name="step1">
            <JoinField1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              validateField={validateField}
              setConfirmId={setConfirmId}
              setConfirmPassword={setConfirmPassword}
              confirmPassword=""
            />
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448]"
              onClick={onClickNext}
            >
              NEXT
            </button>
          </Funnel.Step>
          <Funnel.Step name="step2">
            <JoinField2
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              validateField={validateField}
            />
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#F8D448] text-white rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448] mb-2"
              onClick={onPrevStep}
            >
              이전
            </button>
            <button
              type="submit"
              className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F8D448] ${
                isFormValid
                  ? 'bg-[#F8D448] text-white hover:bg-[#e5c340]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              제출
            </button>
          </Funnel.Step>
        </Funnel>
      </form>
    </div>
  );
}

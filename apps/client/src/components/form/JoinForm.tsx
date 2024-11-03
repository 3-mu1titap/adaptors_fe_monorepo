'use client';
import { useState } from 'react';
import { z } from 'zod';
import { SignInInputType } from '../types/auth/authType';
import SubmitButton from '../ui/Button/SubmitButton';
import JoinInput from '../ui/input/JoinInput';

// 유효성 검사 스키마 정의
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
  role: z.enum(['Mentor', 'Mentee'], { message: '역할을 선택해주세요.' }),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function JoinForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    nickname: '',
    id: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    email: '',
    role: 'Mentor',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpFormData, string>>
  >({});

  // 개별 필드 유효성 검사 함수
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

  // 전화번호 형식을 지정하는 함수
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, ''); // 숫자만 남기기
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 7)
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
  };

  // 입력 변경 처리 함수
  const handleChange = (fieldName: keyof SignUpFormData) => (value: string) => {
    let formattedValue = value;
    // phone_number 필드의 경우 하이픈 추가
    if (fieldName === 'phone_number') {
      formattedValue = formatPhoneNumber(value);
    }
    setFormData((prevData) => ({ ...prevData, [fieldName]: formattedValue }));
    validateField(fieldName, formattedValue);
  };

  const fields: Array<
    SignInInputType & {
      clearValue: () => void;
      text: string;
      name: keyof SignUpFormData;
      required: boolean;
    }
  > = [
    {
      name: 'name',
      text: '이름',
      value: formData.name,
      setValue: handleChange('name'),
      required: true,
      clearValue: () => setFormData((prev) => ({ ...prev, name: '' })),
    },
    {
      name: 'nickname',
      text: '닉네임',
      value: formData.nickname,
      setValue: handleChange('nickname'),
      required: true,
      clearValue: () => setFormData((prev) => ({ ...prev, nickname: '' })),
    },
    {
      name: 'id',
      text: '아이디',
      value: formData.id,
      setValue: handleChange('id'),
      required: true,
      clearValue: () => setFormData((prev) => ({ ...prev, id: '' })),
    },
    {
      name: 'password',
      text: '비밀번호',
      value: formData.password,
      setValue: handleChange('password'),
      required: true,
      clearValue: () => setFormData((prev) => ({ ...prev, password: '' })),
    },
    {
      name: 'confirmPassword',
      text: '비밀번호 확인',
      value: formData.confirmPassword,
      setValue: handleChange('confirmPassword'),
      required: true,
      clearValue: () =>
        setFormData((prev) => ({ ...prev, confirmPassword: '' })),
    },
    {
      name: 'phone_number',
      text: '전화번호',
      value: formData.phone_number,
      setValue: handleChange('phone_number'),
      required: true,
      clearValue: () => setFormData((prev) => ({ ...prev, phone_number: '' })),
    },
    {
      name: 'email',
      text: '이메일',
      value: formData.email,
      setValue: handleChange('email'),
      required: true,
      clearValue: () => setFormData((prev) => ({ ...prev, email: '' })),
    },
  ];

  // 중복 검사 함수
  const checkDuplicate = async (field: keyof SignUpFormData) => {
    try {
      // API 요청 예시: 해당 API는 구현해야 함
      const response = await fetch(
        `/api/check-duplicate?field=${field}&value=${formData[field]}`
      );
      const result = await response.json();
      if (!result.isUnique) {
        setErrors((prev) => ({
          ...prev,
          [field]: `${field}가 중복되었습니다.`,
        }));
      } else {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    } catch (error) {
      console.error('중복 검사 오류:', error);
    }
  };

  // 폼 제출 함수
  const handleSubmit = (e: React.FormEvent) => {
    console.log('제출됨');
    e.preventDefault();

    try {
      signUpSchema.parse(formData);
      setErrors({});
      console.log('폼 데이터:', formData);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const errorMessages = validationError.errors.reduce(
          (acc, error) => {
            const path = error.path[0];
            if (typeof path === 'string')
              acc[path as keyof SignUpFormData] = error.message;
            return acc;
          },
          {} as Partial<Record<keyof SignUpFormData, string>>
        );
        setErrors(errorMessages);
      }
    }
  };

  return (
    <form className="max-w-[400px] mx-auto" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="mt-4">
          <JoinInput signInInput={field} />
          {errors[field.name as keyof SignUpFormData] && (
            <p className="text-red-500">
              {errors[field.name as keyof SignUpFormData]}
            </p>
          )}
          {field.name === 'id' && (
            <button
              type="button"
              onClick={() => checkDuplicate('id')}
              className="text-blue-500"
            >
              아이디 중복 검사
            </button>
          )}
          {field.name === 'email' && (
            <button
              type="button"
              onClick={() => checkDuplicate('email')}
              className="text-blue-500"
            >
              이메일 중복 검사
            </button>
          )}
        </div>
      ))}

      <div className="my-4">
        <label className="my-4">역할</label>
        <div className="flex gap-8 mt-2">
          <label>
            <input
              type="radio"
              value="Mentor"
              checked={formData.role === 'Mentor'}
              onChange={() => {
                setFormData((prev) => ({ ...prev, role: 'Mentor' }));
                validateField('role', 'Mentor');
              }}
              className="mr-2"
            />
            Mentor
          </label>
          <label>
            <input
              type="radio"
              value="Mentee"
              checked={formData.role === 'Mentee'}
              onChange={() => {
                setFormData((prev) => ({ ...prev, role: 'Mentee' }));
                validateField('role', 'Mentee');
              }}
              className="mr-2 "
            />
            Mentee
          </label>
        </div>
        {errors.role && <p className="text-red-500">{errors.role}</p>}
      </div>

      <SubmitButton title="회원가입" />
    </form>
  );
}

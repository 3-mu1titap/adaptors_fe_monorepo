'use client';
import PasswordViewer from '@repo/web/components/form/PasswordViewer';
import { Input } from '@repo/web/components/ui/input/CommonInput';
import { useState } from 'react';
import { z } from 'zod';
import { checkAccountId } from '../../../actions/auth/auth';
import { accountFormData, accountSchema } from '../../form/signUpSchema';

import InnerButton from '@repo/web/components/ui/Button/InnerButton';
import NextButton from '@repo/web/components/ui/Button/NextButton';
import Gutter from '@repo/web/components/ui/Gutter';
import TextH2 from '@repo/web/components/ui/Text/TextH2';
import ErrorToast from '@repo/web/components/ui/Toast/ErrorToast';
import RadioButton from '../../ui/radio/RadioButton';
import './index.css';

export interface JoinField1Props {
  formData: accountFormData;
  setFormData: React.Dispatch<React.SetStateAction<accountFormData>>;
  errors: Partial<Record<keyof accountFormData, string>>;
  setErrors: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof accountFormData, string>>>
  >;
  setConfirmId: React.Dispatch<React.SetStateAction<boolean>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  handleButtton: () => void;
}

export default function Account({
  formData,
  setFormData,
  errors,
  setErrors,
  setConfirmId,
  confirmPassword,
  setConfirmPassword,
  handleButtton,
}: JoinField1Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmButton, setConfirmButton] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 업데이트된 입력값을 반영하고 confirmId를 false로 설정
    setFormData((prev) => ({ ...prev, [name]: value }));

    // 유효성 검사 수행
    validateField(name as keyof accountFormData, value);

    // accountId가 변경될 경우 confirmId와 오류 메시지를 관리
    if (name === 'accountId' && formData.accountId.length >= 5) {
      setConfirmId(false);
      setErrors((prevErrors) => ({
        ...prevErrors,
        accountId: '아이디 중복 검사가 필요합니다',
      }));
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      role: value as 'MENTOR' | 'MENTEE',
    }));
  };

  const checkDuplicate = async (field: 'accountId' | 'email') => {
    if (
      errors.accountId === '아이디 중복 검사가 필요합니다' ||
      errors.accountId === ''
    ) {
      try {
        const data = await checkAccountId(formData.accountId);
        if (data === 2011) {
          setErrors((prev) => ({
            ...prev,
            [field]: `해당 아이디가 이미 사용중입니다.`,
          }));
        } else if (data === 200) {
          setConfirmId(true);
          setConfirmButton(true);
          // toast.success('사용 가능한 아이디입니다.');
          setErrors((prev) => ({ ...prev, accountId: '' }));
        }
      } catch (error) {
        console.error('중복 검사 오류:', error);
      }
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  //개별 필드 유효성 검사
  const validateField = (fieldName: keyof accountFormData, value: string) => {
    try {
      accountSchema.shape[fieldName].parse(value);
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
  const onClickNextButton = () => {
    try {
      accountSchema.parse(formData);

      handleButtton();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce(
          (acc, curr) => {
            const fieldName = curr.path[0] as keyof accountFormData;
            acc[fieldName] = curr.message;
            return acc;
          },
          {} as Partial<Record<keyof accountFormData, string>>
        );

        setErrors(formattedErrors);
      }
    }
  };

  return (
    <div className="py-2">
      <TextH2 text="Role" />
      <RadioButton
        name="role"
        options={[
          { label: '멘티 + 멘토링 참가', value: 'MENTEE' },
          { label: '멘토 + 멘토링 운영', value: 'MENTOR' },
        ]}
        selectedValue={formData.role}
        onChange={handleRadioChange}
        classname="flex-col"
      />
      <Gutter size={2} />
      <TextH2 text="Account" />
      {/* 아이디 */}
      <fieldset className="relative flex items-center w-full rounded-xl bg-white focus-within:ring-2 focus-within:ring-yellow-300 mb-2">
        <Input
          type="text"
          name="accountId"
          value={formData.accountId}
          onChange={handleChange}
          placeholder="아이디"
        />
        <InnerButton
          onClick={() => checkDuplicate('accountId')}
          title="중복확인"
          colorType="primary"
          isDisabled={confirmButton}
          className="absolute right-2"
        />
        {errors.accountId && (
          <ErrorToast errorMessage={errors.accountId} errorName="accountId" />
        )}
      </fieldset>
      {/* 이메일 */}
      <fieldset className="relative mb-2">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="이메일"
        />
        {errors.email && (
          <ErrorToast errorMessage={errors.email} errorName="email" />
        )}
      </fieldset>
      {/* 비밀번호 */}
      <fieldset className="relative mb-2">
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <PasswordViewer
          isTrue={showPassword}
          onClick={togglePasswordVisibility}
        />
        {errors.password && (
          <ErrorToast errorMessage={errors.password} errorName="password" />
        )}
      </fieldset>
      {/* 비밀번호 확인 */}
      <fieldset className="relative mb-2">
        <Input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // 함수로 감싸기
          placeholder="비밀번호 확인"
        />
        <PasswordViewer
          isTrue={showConfirmPassword}
          onClick={toggleConfirmPasswordVisibility}
        />
        {confirmPassword !== formData.password && (
          <ErrorToast
            errorMessage="비밀번호가 일치하지 않습니다"
            errorName="confirmPassword"
          />
        )}
      </fieldset>

      <NextButton
        className="fixed bottom-5 left-[50%] translate-x-[-50%] md:relative md:bottom-auto w-[80%] md:w-full"
        text="다음"
        colorType="primary"
        textColor="text-black"
        onClick={onClickNextButton}
        disabled={false} //!validateForm1(formData)
      />
    </div>
  );
}

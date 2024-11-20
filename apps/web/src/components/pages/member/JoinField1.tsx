'use client';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import { checkAccountId } from '../../../actions/auth/auth';
import { accountFormData, accountSchema } from '../../form/signUpSchema';
import JoinStepButton from '../../ui/Button/JoinStepButton';
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
    <div className=" py-2 space-y-1 h-full flex flex-col justify-between">
      <span>
        <h2 className="text-2xl font-bold mb-2">Role</h2>
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
        <div className="">
          <h2 className="text-2xl font-bold mt-4 mb-2">Account</h2>
          {/* 아이디 */}
          <div className="relative flex items-center w-full rounded-xl bg-white focus-within:ring-2 focus-within:ring-yellow-300">
            <input
              type="text"
              name="accountId"
              value={formData.accountId}
              onChange={handleChange}
              placeholder="아이디"
              className=" custom-input"
            />
            <button
              className="absolute right-2 px-2 py-1 bg-[#F8D448] text-white text-[11px] font-medium rounded-[0.5rem] hover:bg-[#e5c340] transition-colors"
              onClick={() => checkDuplicate('accountId')}
              type="button"
            >
              중복확인
            </button>
          </div>
          <p className={`error ${errors.accountId ? 'visible' : 'invisible'}`}>
            {errors.accountId}
          </p>
          {/* 이메일 */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
            className="custom-input"
          />
          <p className={`error ${errors.email ? 'visible' : 'invisible'}`}>
            {errors.email}
          </p>
          {/* 비밀번호 */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호"
              className="custom-input"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-black"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <p
            className={`error ${errors.password ? 'visible m-0' : 'invisible'}`}
          >
            {errors.password}
          </p>
          {/* 비밀번호 확인 */}
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // 함수로 감싸기
              placeholder="비밀번호 확인"
              className="custom-input"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-black"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <p
            className={`error ${confirmPassword !== formData.password ? 'visible m-0' : 'invisible'}`}
          >
            비밀번호가 일치하지 않습니다
          </p>
        </div>
      </span>
      <JoinStepButton
        onClick={onClickNextButton}
        disabled={false} //!validateForm1(formData)
      />
    </div>
  );
}

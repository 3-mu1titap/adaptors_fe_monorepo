'use client';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { checkAccountId } from '../../../actions/auth/auth';
import { SignUpFormData } from '../../form/JoinFunnel';
import RadioButton from '../../ui/radio/RadioButton';
import './index.css';

export interface JoinField1Props {
  formData: SignUpFormData;
  setFormData: React.Dispatch<React.SetStateAction<SignUpFormData>>;
  errors: Partial<Record<keyof SignUpFormData, string>>;
  setErrors: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof SignUpFormData, string>>>
  >;
  validateField: (fieldName: keyof SignUpFormData, value: string) => void;
  confirmId?: string;
  setConfirmId?: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword?: string;
  setConfirmPassword?: React.Dispatch<React.SetStateAction<string>>;
}

export default function JoinField1({
  formData,
  setFormData,
  errors,
  setErrors,
  validateField,
  confirmId,
  setConfirmId,
  setConfirmPassword,
}: JoinField1Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof SignUpFormData, value); // Validate field on change
    if (name === 'confirmPassword') {
      setConfirmPassword?.(value);
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      role: value as 'MENTOR' | 'MENTEE',
    }));
  };

  const checkDuplicate = async (field: 'id' | 'email') => {
    if (errors.accountId == undefined || errors.accountId === '') {
      try {
        console.log('1');
        const data = await checkAccountId(formData.accountId);
        if (data === 2011) {
          setErrors((prev) => ({
            ...prev,
            [field]: `해당 아이디가 이미 사용중입니다.`,
          }));
        } else if (data === 200) {
          console.log('중복확인 성공');
          setConfirmId?.('sdflaksjd');
        } else {
          setErrors((prev) => ({ ...prev, [field]: '' }));
        }
      } catch (error) {
        console.error('중복 검사 오류:', error);
      }
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <div className="px-6 py-2 space-y-1">
      <h2 className="text-2xl font-bold mb-2">Role</h2>
      <RadioButton
        name="role"
        options={[
          { label: '멘티 + 멘토링 참가', value: 'MENTEE' },
          { label: '멘토 + 멘토링 운영', value: 'MENTOR' },
        ]}
        selectedValue={formData.role}
        onChange={handleRadioChange}
      />

      <div className="space-y-1">
        <h2 className="text-2xl font-bold mt-4 mb-2">Account</h2>

        {/* 아이디 */}
        <div className="relative flex items-center w-full rounded-xl border border-gray-200 bg-white focus-within:ring-2 focus-within:ring-yellow-300">
          <input
            type="text"
            name="accountId"
            value={formData.accountId}
            onChange={handleChange}
            placeholder="아이디"
            className="w-full px-3 py-2 rounded-xl focus:outline-none"
          />
          <button
            className="absolute right-2 px-4 py-1.5 bg-[#F8D448] text-white text-md font-medium rounded-md hover:bg-[#e5c340] transition-colors"
            onClick={() => checkDuplicate('id')}
            type="button"
          >
            중복확인
          </button>
        </div>
        <p
          className={`error ${errors.accountId || !confirmId ? 'visible' : 'invisible'}`}
        >
          {errors.accountId
            ? errors.accountId
            : !confirmId
              ? confirmId
              : '중복확인필요'}
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
        <p className={`error ${errors.password ? 'visible m-0' : 'invisible'}`}>
          {errors.password}
        </p>

        {/* 비밀번호 확인 */}
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
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
          className={`error ${formData.confirmPassword !== formData.password ? 'visible m-0' : 'invisible'}`}
        >
          비밀번호가 일치하지 않습니다
        </p>
      </div>
    </div>
  );
}

'use client';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { checkAccountId } from '../../../actions/auth/auth';
import { SignUpFormData } from '../../form/JoinFunnel';
import RadioButton from '../../ui/radio/RadioButton';

interface JoinField1Props {
  formData: SignUpFormData;
  setFormData: React.Dispatch<React.SetStateAction<SignUpFormData>>;
  errors: Partial<Record<keyof SignUpFormData, string>>; // errors prop 추가
  setErrors: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof SignUpFormData, string>>>
  >; // setErrors prop 추가
}

export default function JoinField1({
  formData,
  setFormData,
  errors,
  setErrors,
}: JoinField1Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: SignUpFormData) => ({ ...prev, [name]: value }));
    console.log(errors);
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev: SignUpFormData) => ({
      ...prev,
      role: value as 'MENTOR' | 'MENTEE',
    }));
  };

  const checkDuplicate = async (field: 'id' | 'email') => {
    try {
      const data = await checkAccountId(formData.id);
      if (data == 2011) {
        setErrors((prev) => ({
          ...prev,
          [field]: `해당 아이디가 이미 사용중입니다.`,
        }));
      } else {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    } catch (error) {
      console.error('중복 검사 오류:', error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Role</h2>
      <RadioButton
        name="role"
        options={[
          { label: '멘티 + 멘토링 참가', value: 'MENTEE' },
          { label: '멘토 + 멘토링 운영', value: 'MENTOR' },
        ]}
        selectedValue={formData.role}
        onChange={handleRadioChange}
      />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Account</h2>
        {/* 아이디 */}
        <div className="relative flex items-center w-full rounded-lg border border-gray-200 bg-white">
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="아이디"
            className="w-full px-4 py-3 rounded-lg focus:outline-none"
          />
          <button
            className="absolute right-2 px-4 py-1.5 bg-[#F8D448] text-white text-md font-medium rounded-md hover:bg-[#e5c340] transition-colors"
            onClick={() => checkDuplicate('id')}
          >
            중복확인
          </button>
        </div>
        {errors.id && <p className="text-red-500 text-md">{errors.id}</p>}{' '}
        {/* 에러 메시지 추가 */}
        {/* 이메일 */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {errors.email && <p className="text-red-500 text-md">{errors.email}</p>}{' '}
        {/* 에러 메시지 추가 */}
        {/* 비밀번호 */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-md">{errors.password}</p>
        )}{' '}
        {/* 에러 메시지 추가 */}
        {/* 비밀번호 확인 */}
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호 확인"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-md">{errors.confirmPassword}</p>
        )}{' '}
        {/* 에러 메시지 추가 */}
      </div>
    </div>
  );
}

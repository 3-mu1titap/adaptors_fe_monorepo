'use client';
import NextButton from '@components/ui/Button/NextButton';
import { Input } from '@components/ui/input/CommonInput';
import { useState } from 'react';
import { z } from 'zod';
import {
  informationFormData,
  informationSchema,
  validateForm,
} from '../../form/signUpSchema';

export interface JoinField2Props {
  formData: informationFormData;
  setFormData: React.Dispatch<React.SetStateAction<informationFormData>>;
  errors: Partial<Record<keyof informationFormData, string>>;
  setErrors: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof informationFormData, string>>>
  >;
  handleButtton: () => void;
}

export default function Information({
  formData,
  setFormData,
  setErrors,
  errors,
  handleButtton,
}: JoinField2Props) {
  const [showErrorMessege, setShowErrorMessege] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      const formattedValue = formatPhoneNumber(value);
      setFormData((prev: informationFormData) => ({
        ...prev,
        [name]: formattedValue,
      }));
      validateField(name as keyof informationFormData, formattedValue);
    } else {
      setFormData((prev: informationFormData) => ({ ...prev, [name]: value }));
      validateField(name as keyof informationFormData, value);
    }
  };

  //전화번호 유효성 검사
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const truncated = cleaned.slice(0, 11);

    if (truncated.length <= 3) return truncated;
    if (truncated.length <= 7)
      return `${truncated.slice(0, 3)}-${truncated.slice(3)}`;
    return `${truncated.slice(0, 3)}-${truncated.slice(3, 7)}-${truncated.slice(7, 11)}`;
  };

  //개별 필드 유효성 검사
  const validateField = (
    fieldName: keyof informationFormData,
    value: string
  ) => {
    try {
      informationSchema.shape[fieldName].parse(value);
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
    handleButtton();
    setShowErrorMessege(false);
  };

  return (
    <div className=" py-2 space-y-1 h-full flex flex-col justify-between">
      <span>
        <h2 className="text-2xl font-bold ">Personal Information</h2>
        <div className="space-y-2">
          {/* Name Field */}
          <fieldset className="space-y-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              이름
            </label>
            <Input
              value={formData.name}
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력하세요"
              className="custom-input "
              onChange={handleChange}
            />
            <p className={`error ${errors.name ? 'visible m-0' : 'invisible'}`}>
              {errors.name}
            </p>
          </fieldset>
          {/* NickName Field */}
          <fieldset className="space-y-1">
            <label
              htmlFor="nickName"
              className="block text-sm font-medium text-gray-700"
            >
              닉네임
            </label>
            <Input
              name="nickName"
              id="nickName"
              value={formData.nickName}
              type="text"
              placeholder="닉네임을 입력하세요"
              className="custom-input "
              onChange={handleChange}
            />
            <p
              className={`error ${errors.nickName ? 'visible m-0' : 'invisible'}`}
            >
              {errors.nickName}
            </p>
          </fieldset>
          {/* Phone Number Field */}
          <fieldset className="space-y-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              전화번호
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              type="tel"
              placeholder="전화번호를 입력하세요"
              className="custom-input "
              onChange={handleChange}
            />
            <p
              className={`error ${errors.phoneNumber ? 'visible m-0' : 'invisible'}`}
            >
              {errors.phoneNumber}
            </p>
          </fieldset>
        </div>
        <p
          className={`error ${validateForm(formData, informationSchema) && showErrorMessege ? 'visible mt-3' : 'invisible'}`}
        >
          입력되지 않은 값이 있습니다. 모든 값을 입력해주세요
        </p>
      </span>
      <NextButton
        onClick={onClickNextButton}
        disabled={!validateForm(formData, informationSchema)}
      />
    </div>
  );
}

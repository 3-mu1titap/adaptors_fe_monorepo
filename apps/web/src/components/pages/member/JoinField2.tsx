'use client';
import { z } from 'zod';
import { SignUpFormData2, signUpStep2Schema } from '../../form/signUpSchema';
import JoinStepButton from '../../ui/Button/JoinStepButton';
export interface JoinField2Props {
  formData: SignUpFormData2;
  setFormData: React.Dispatch<React.SetStateAction<SignUpFormData2>>;
  errors: Partial<Record<keyof SignUpFormData2, string>>;
  setErrors: React.Dispatch<
    React.SetStateAction<Partial<Record<keyof SignUpFormData2, string>>>
  >;
  handleButtton: () => void;
}

export default function JoinField2({
  formData,
  setFormData,
  setErrors,
  errors,
  handleButtton,
}: JoinField2Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      const formattedValue = formatPhoneNumber(value);
      setFormData((prev: SignUpFormData2) => ({
        ...prev,
        [name]: formattedValue,
      }));
      validateField(name as keyof SignUpFormData2, formattedValue);
    } else {
      setFormData((prev: SignUpFormData2) => ({ ...prev, [name]: value }));
      validateField(name as keyof SignUpFormData2, value);
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
  const validateField = (fieldName: keyof SignUpFormData2, value: string) => {
    try {
      signUpStep2Schema.shape[fieldName].parse(value);
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

  return (
    <div className="p-6 space-y-6 h-full relative">
      <h2 className="text-2xl font-bold ">Personal Information</h2>

      <div className="space-y-2">
        {/* Name Field */}
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            이름
          </label>
          <input
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
        </div>

        {/* NickName Field */}
        <div className="space-y-1">
          <label
            htmlFor="nickName"
            className="block text-sm font-medium text-gray-700"
          >
            닉네임
          </label>
          <input
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
        </div>

        {/* Phone Number Field */}
        <div className="space-y-1">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            전화번호
          </label>
          <input
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
        </div>
      </div>
      <JoinStepButton
        onClick={handleButtton}
        disabled={false} //!validateForm2(formData)
      />
    </div>
  );
}

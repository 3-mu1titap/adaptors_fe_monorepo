'use client';
import { SignUpFormData } from '../../form/JoinFunnel';
import { JoinField1Props } from './JoinField1';

export default function JoinField2({
  formData,
  setFormData,
  errors,
  validateField,
}: JoinField1Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      const formattedValue = formatPhoneNumber(value);
      setFormData((prev: SignUpFormData) => ({
        ...prev,
        [name]: formattedValue,
      }));
      validateField(name as keyof SignUpFormData, formattedValue);
    } else {
      setFormData((prev: SignUpFormData) => ({ ...prev, [name]: value }));
      validateField(name as keyof SignUpFormData, value);
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

  return (
    <div className="p-6 space-y-6">
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
    </div>
  );
}

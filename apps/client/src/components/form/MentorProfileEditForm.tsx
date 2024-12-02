import { Input } from '../ui/input/CommonInput';
import RadioButton from '../ui/radio/RadioButton';

interface MentorPorfileEditFormType {
  profileImageUrl: string;
  nickName: string;
  phoneNumber: string;
  mentoringField: string;
  age: number;
  gender: string; // 'FEMAIL' -> 'FEMALE'로 수정
  jobExperience: string;
}

interface MentorProfileEditFormProps {
  formData: MentorPorfileEditFormType;
  setFormData: React.Dispatch<React.SetStateAction<MentorPorfileEditFormType>>;
}

export default function MentorProfileEditForm({
  formData,
  setFormData,
}: MentorProfileEditFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 업데이트된 입력값을 반영
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }));
  };

  return (
    <>
      {/*  프로필 이미지 */}
      <fieldset className="relative flex items-center w-full rounded-xl bg-white focus-within:ring-2 focus-within:ring-yellow-300 mb-2">
        <></>
      </fieldset>
      {/* 닉네임 */}
      <fieldset className="space-y-1">
        <label
          htmlFor="nickName"
          className="block text-lg font-medium text-gray-700"
        >
          닉네임
        </label>
        <Input
          name="nickName"
          id="nickName"
          value={formData.nickName}
          type="text"
          placeholder="닉네임을 입력하세요"
          className="custom-input"
          onChange={handleChange}
        />
      </fieldset>
      {/* 전화번호 */}
      <fieldset className="space-y-1">
        <label
          htmlFor="phoneNumber"
          className="block text-lg font-medium text-gray-700"
        >
          전화번호
        </label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          type="tel"
          placeholder="전화번호를 입력하세요"
          className="custom-input"
          onChange={handleChange}
        />
      </fieldset>
      {/* Mentoring Field */}
      <fieldset className="space-y-2">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          멘토링 분야
        </label>
        <div className="grid grid-cols-2 gap-2 text-center">
          {['면접', '이력서', '포트폴리오', '자소서'].map((field) => (
            <div
              key={field}
              onClick={() =>
                setFormData((prev) => ({ ...prev, mentoringField: field }))
              }
              className={`px-3 py-2 rounded-md text-md font-medium transition-colors
                    ${
                      formData.mentoringField === field
                        ? 'bg-[#F8D448] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
            >
              {field}
            </div>
          ))}
        </div>
      </fieldset>
      {/* 출생년도 */}
      <fieldset className="space-y-2">
        <label
          htmlFor="age"
          className="block text-lg font-medium text-gray-700"
        >
          출생년도
        </label>
        <Input
          id="age"
          name="age" // 추가: name 속성 추가
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="출생년도를 입력해주세요 ex)2000"
          className="custom-div number"
        />
      </fieldset>
      {/* 성별 */}
      <fieldset className="space-y-2">
        <label
          htmlFor="gender"
          className="block text-lg font-medium text-gray-700"
        >
          성별
        </label>
        <RadioButton
          name="gender"
          options={[
            { label: '남성', value: 'MALE' },
            { label: '여성', value: 'FEMALE' },
            { label: '기타', value: 'OTHERS' },
          ]}
          selectedValue={formData.gender}
          onChange={handleRadioChange} // 추가: handleRadioChange 함수 사용
        />
      </fieldset>
      {/* Job Experience Input */}
      <fieldset className="space-y-2">
        <label
          htmlFor="jobExperience"
          className="block text-lg font-medium text-gray-700"
        >
          경력
        </label>
        <Input
          id="jobExperience"
          name="jobExperience" // 추가: name 속성 추가
          type="text"
          value={formData.jobExperience}
          onChange={handleChange} // 추가: handleChange 함수 사용
          placeholder="(예: 3년)"
          className="custom-div"
        />
      </fieldset>
    </>
  );
}

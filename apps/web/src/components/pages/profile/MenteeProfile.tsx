'use client';

import { useState } from 'react';
import JoinStepButton from '../../ui/Button/JoinStepButton';
import RadioButton from '../../ui/radio/RadioButton';
import JoinSelect from '../../ui/select/JoinSelect';
import '../member/index.css';

const occupationStatus = [
  { value: '취준생', label: '취준생' },
  { value: '재직중', label: '재직중' },
  { value: '퇴직', label: '퇴직' },
];

const educationLevelOptions = [
  { value: '초졸', label: '초졸' },
  { value: '중졸', label: '중졸' },
  { value: '고졸', label: '고졸' },
  { value: '대졸', label: '대졸' },
  { value: '대학원졸', label: '대학원졸' },
];

export default function MenteeProfile({
  handleButton,
}: {
  handleButton: () => void;
}) {
  const [gender, setGender] = useState('MALE');
  const handleRadioChange = (value: string) => {
    setGender(value);
  };
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">profile</h2>

      {/* Occupation Status */}
      <div className="space-y-2">
        <label
          htmlFor="occupationStatus"
          className="block text-sm font-medium text-gray-700"
        >
          취업 상태
        </label>
        <JoinSelect
          options={educationLevelOptions}
          defaultValue="취준생"
          onChange={(value) => console.log(value)}
        />
      </div>

      <span className="flex gap-2">
        <div className="space-y-2 flex-1">
          <label
            htmlFor="educationLevel"
            className="block text-sm font-medium text-gray-700"
          >
            최종 학력
          </label>
          <JoinSelect
            options={occupationStatus}
            defaultValue="대졸"
            onChange={(value) => console.log(value)}
          />
        </div>
        {/* Age */}
        <div className="space-y-2 flex-1">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            나이
          </label>
          <input
            id="age"
            type="number"
            placeholder="ex) 20"
            className="custom-div"
          />
        </div>
      </span>

      <div className="space-y-2">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          성별
        </label>
        <RadioButton
          name="gender"
          options={[
            { label: '남성', value: 'MALE' },
            { label: '여성', value: 'FEMALE' },
            { label: '기타', value: 'ATC' },
          ]}
          selectedValue={gender}
          onChange={handleRadioChange}
        />
      </div>

      <span className="flex gap-2 ">
        <div className="space-y-2">
          <label
            htmlFor="jobType"
            className="block text-sm font-medium text-gray-700"
          >
            직종
          </label>
          <input
            id="jobType"
            type="text"
            placeholder="ex) IT"
            className="custom-div"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="jobExperience"
            className="block text-sm font-medium text-gray-700"
          >
            경력
          </label>
          <input
            id="jobExperience"
            type="text"
            placeholder="ex) 3년"
            className="custom-div"
          />
        </div>
      </span>

      {/* Job Application Count */}
      <div className="space-y-2">
        <label
          htmlFor="jobApplicationCount"
          className="block text-sm font-medium text-gray-700"
        >
          지원 횟수
        </label>
        <input
          id="jobApplicationCount"
          type="number"
          placeholder="지원 횟수를 입력하세요"
          className="custom-div"
        />
      </div>
      <JoinStepButton onClick={handleButton} />
    </div>
  );
}

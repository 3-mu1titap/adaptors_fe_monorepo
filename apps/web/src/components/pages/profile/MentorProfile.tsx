'use client';

import { useState } from 'react';
import {
  MentoProfile,
  postMentorProfile,
} from '../../../actions/profile/profile';
import RadioButton from '../../ui/radio/RadioButton';

export default function MentorProfile() {
  const [mentoringField, setMentoringField] = useState('');
  const [gender, setGender] = useState<string>('MALE');
  const [age, setAge] = useState<number>(20);
  const [jobExperience, setJobExperience] = useState('');

  // 멘토링 분야 라디오 버튼 클릭 처리
  const handleRadioChange = (value: string) => {
    setGender(value);
  };

  // 멘토 프로필 저장 처리
  const handleSave = async () => {
    const mentorProfile: MentoProfile = {
      mentoringField,
      gender,
      age,
      jobExperience,
    };
    console.log(mentorProfile);
    const data = await postMentorProfile(mentorProfile);
    console.log(data);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">profile</h2>

      {/* Mentoring Field */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          멘토링 분야
        </label>
        <div className="grid grid-cols-2 gap-2 text-center">
          {['면접', '이력서', '포트폴리오', '자소서'].map((field) => (
            <div
              key={field}
              onClick={() => setMentoringField(field)}
              className={`px-3 py-2 rounded-md text-md font-medium transition-colors
                  ${
                    mentoringField === field
                      ? 'bg-[#F8D448] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
            >
              {field}
            </div>
          ))}
        </div>
      </div>

      {/* Age Input */}
      <div className="space-y-2">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          나이
        </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="나이를 입력하세요"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Gender Radio Buttons */}
      <div className="space-y-2">
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
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
          selectedValue={gender}
          onChange={handleRadioChange}
        />
      </div>

      {/* Job Experience Input */}
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
          value={jobExperience}
          onChange={(e) => setJobExperience(e.target.value)}
          placeholder="경력을 입력하세요 (예: 3년)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        type="button"
        className="w-full px-4 py-2 bg-[#F8D448] text-black rounded-md hover:bg-[#e5c340] focus:outline-none focus:ring-2 focus:ring-[#F8D448]"
      >
        저장
      </button>
    </div>
  );
}

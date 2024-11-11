'use client';

import { useState } from 'react';
import RadioButton from '../../ui/radio/RadioButton';

export default function MenteeProfile() {
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
        <select
          id="occupationStatus"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="취준생">취준생</option>
          <option value="재직중">재직중</option>
          <option value="퇴직">퇴직</option>
        </select>
      </div>

      <span className="flex gap-2">
        <div className="space-y-2 flex-1">
          <label
            htmlFor="educationLevel"
            className="block text-sm font-medium text-gray-700"
          >
            최종 학력
          </label>
          <select
            id="educationLevel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="초졸">초졸</option>
            <option value="중졸">중졸</option>
            <option value="고졸">고졸</option>
            <option value="대졸">대졸</option>
            <option value="대학원졸">대학원졸</option>
          </select>
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
            placeholder="나이를 입력하세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            placeholder="직종을 입력하세요 (예: IT)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            placeholder="경력을 입력하세요 (예: 3년)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

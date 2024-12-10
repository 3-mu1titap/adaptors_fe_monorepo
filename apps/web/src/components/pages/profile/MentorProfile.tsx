'use client';

import { Input } from '@repo/web/components/ui/input/CommonInput';
import { useState } from 'react';
import { postMentorProfile } from '../../../actions/profile/profile';
import useUserStore from '../../../store/uuidStore';
import { MentorProfileRequestType } from '../../types/profile/RequestType';
import JoinStepButton from '../../ui/Button/NextButton';
import RadioButton from '../../ui/radio/RadioButton';
import '../member/index.css';

export default function MentorProfile({
  handleButtton,
}: {
  handleButtton: () => void;
}) {
  const [mentoringField, setMentoringField] = useState('');
  const [gender, setGender] = useState<string>('MALE');
  const [age, setAge] = useState<number | ''>('');
  const [jobExperience, setJobExperience] = useState('');
  const { uuid } = useUserStore();
  const [error, setError] = useState(false);
  // 멘토링 분야 라디오 버튼 클릭 처리
  const handleRadioChange = (value: string) => {
    setGender(value);
  };

  // 멘토 프로필 저장 처리
  const handleSave = async () => {
    if (mentoringField === '' || gender === '' || jobExperience === '') {
      setError(true);
      return;
    }
    const mentorProfile: MentorProfileRequestType = {
      mentoringField,
      gender,
      age: Number(age),
      jobExperience,
    };
    const data = await postMentorProfile({ profile: mentorProfile, uuid });
    handleButtton();
  };

  return (
    <div className="py-2 h-full flex flex-col justify-between">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Profile</h2>
        {/* Mentoring Field */}
        <fieldset className="space-y-2">
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
        </fieldset>
        <fieldset className="space-y-2">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            출생년도
          </label>
          <Input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="출생년도를 입력해주세요 ex)2000"
            className="custom-div number"
          />
        </fieldset>
        <fieldset className="space-y-2">
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
        </fieldset>
        {/* Job Experience Input */}
        <fieldset className="space-y-2">
          <label
            htmlFor="jobExperience"
            className="block text-sm font-medium text-gray-700"
          >
            경력
          </label>
          <Input
            id="jobExperience"
            type="text"
            value={jobExperience}
            onChange={(e) => setJobExperience(e.target.value)}
            placeholder="(예: 3년)"
            className="custom-div"
          />
        </fieldset>
      </div>
      <p className={`error ${error ? 'visible mt-3' : 'invisible'}`}>
        입력되지 않은 값이 있습니다. 모든 값을 입력해주세요
      </p>
      {/* Save Button */}
      <JoinStepButton onClick={handleSave} />
    </div>
  );
}

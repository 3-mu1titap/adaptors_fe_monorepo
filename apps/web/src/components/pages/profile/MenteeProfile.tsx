'use client';

import { useState } from 'react';
import { postMenteeProfile } from '../../../actions/profile/profile';
import useUserStore from '../../../store/uuidStore';
import { MenteeProfileRequestType } from '../../types/profile/RequestType';
import JoinStepButton from '../../ui/Button/JoinStepButton';
import RadioButton from '../../ui/radio/RadioButton';
import JoinSelect from '../../ui/select/JoinSelect';
import '../member/index.css';

const occupationStatusOptions = [
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
  const [occupationStatus, setOccupationStatus] = useState('취준생');
  const [educationLevel, setEducationLevel] = useState('대졸');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<'FEMALE' | 'MALE' | 'ATC'>('MALE');
  const [jobExperience, setJobExperience] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobApplicationCount, setJobApplicationCount] = useState<number | ''>(
    ''
  );

  const { uuid } = useUserStore();

  const handleSubmit = async () => {
    const menteeProfile: MenteeProfileRequestType = {
      occupationStatus,
      educationLevel,
      age: age !== '' ? Number(age) : 0,
      gender,
      jobExperience,
      jobType,
      jobApplicationCount:
        jobApplicationCount !== '' ? Number(jobApplicationCount) : 0,
    };

    try {
      const data = await postMenteeProfile({ profile: menteeProfile, uuid });
      console.log('Profile submission successful:', data);
    } catch (error) {
      console.error('Profile submission failed:', error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="px-6 py-2 space-y-1 h-full flex flex-col justify-between"
    >
      <div className="space-y-2 ">
        <h2 className="text-2xl font-bold">Profile</h2>
        <span className="flex gap-2 ">
          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium text-gray-700">
              취업 상태
            </label>
            <JoinSelect
              name="occupationStatus"
              options={occupationStatusOptions}
              defaultValue="취준생"
              onChange={(value) => setOccupationStatus(value)}
            />
          </div>
          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium text-gray-700">
              입사 지원 횟수
            </label>
            <input
              name="jobApplicationCount"
              type="number"
              value={jobApplicationCount}
              onChange={(e) => setJobApplicationCount(Number(e.target.value))}
              placeholder="ex) 5"
              className="custom-div"
            />
          </div>
        </span>
        <span className="flex gap-2">
          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium text-gray-700">
              최종 학력
            </label>
            <JoinSelect
              name="educationLevel"
              options={educationLevelOptions}
              defaultValue="대졸"
              onChange={(value) => setEducationLevel(value)}
            />
          </div>
          <div className="space-y-2 flex-1">
            <label className="block text-sm font-medium text-gray-700">
              나이
            </label>
            <input
              name="age"
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              placeholder="ex) 20"
              className="custom-div"
            />
          </div>
        </span>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
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
            onChange={(value) => setGender(value as 'FEMALE' | 'MALE' | 'ATC')}
          />
        </div>
        <span className="flex gap-2 ">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              직종
            </label>
            <input
              name="jobType"
              type="text"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              placeholder="ex) IT"
              className="custom-div"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              경력
            </label>
            <input
              name="jobExperience"
              type="text"
              value={jobExperience}
              onChange={(e) => setJobExperience(e.target.value)}
              placeholder="ex) 3년"
              className="custom-div"
            />
          </div>
        </span>
      </div>
      <JoinStepButton onClick={handleSubmit} />
    </form>
  );
}

'use client';

import { useState } from 'react';
import { Mentor } from '@repo/client/components/types/main/mentor/mentorTypes';
import SubmitButton from '@repo/client/components/ui/Button/SubmitButton';
import MentorProfileEditForm from '@repo/client/components/form/MentorProfileEditForm';

interface MentorPorfileEditFormType {
  profileImageUrl: string;
  nickName: string;
  phoneNumber: string;
  mentoringField: string;
  age: number;
  gender: string; // 'FEMAIL' -> 'FEMALE'로 수정
  jobExperience: string;
}

interface MentorProfileEditProps {
  mentor: Mentor;
  onUpdate: (updatedMentor: Mentor) => void;
}

export default function MentorProfileEdit({
  mentor,
  onUpdate,
}: MentorProfileEditProps) {
  const [formData, setFormData] = useState<MentorPorfileEditFormType>({
    profileImageUrl: mentor.profileImageUrl,
    nickName: mentor.memberRequestDto.nickName,
    phoneNumber: mentor.memberRequestDto.phoneNumber,
    mentoringField: mentor.mentorProfileRequestDto.mentoringField,
    age: mentor.mentorProfileRequestDto.age,
    gender: mentor.mentorProfileRequestDto.gender,
    jobExperience: mentor.mentorProfileRequestDto.jobExperience,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-3xl">
      <MentorProfileEditForm formData={formData} setFormData={setFormData} />
      <SubmitButton title="Update Profile" />
    </form>
  );
}

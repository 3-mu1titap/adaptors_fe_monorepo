'use client';

import { useState } from 'react';
import { Mentor } from '@repo/client/components/types/main/mentor/mentorTypes';
import SubmitButton from '@repo/client/components/ui/Button/SubmitButton';
import MentorProfileEditForm from '@repo/client/components/form/MentorProfileEditForm';
import { MentorProfileEditFormType } from '@repo/client/components/types/main/mypage/myPageTypes';
import { PutUserTotalInfo } from '@repo/client/actions/mypage/mypageAction';

interface MentorProfileEditProps {
  mentor: Mentor;
  onUpdate: (updatedMentor: Mentor) => void;
}

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

export default function MentorProfileEdit({
  mentor,
  onUpdate,
}: MentorProfileEditProps) {
  const [formData, setFormData] = useState<MentorProfileEditFormType>({
    profileImageUrl: mentor.profileImageUrl,
    nickName: mentor.memberRequestDto.nickName,
    phoneNumber: mentor.memberRequestDto.phoneNumber,
    mentoringField: mentor.mentorProfileRequestDto.mentoringField,
    age: mentor.mentorProfileRequestDto.age,
    gender: mentor.mentorProfileRequestDto.gender,
    jobExperience: mentor.mentorProfileRequestDto.jobExperience,
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await PutUserTotalInfo({ formData, userUuid, imageFile: file });

    console.log(formData);
    console.log(file);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-3xl">
      <MentorProfileEditForm
        formData={formData}
        file={file}
        setFile={setFile}
        setFormData={setFormData}
      />
      <SubmitButton title="Update Profile" />
    </form>
  );
}

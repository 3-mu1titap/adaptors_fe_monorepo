'use client';

import { useState } from 'react';
import SubmitButton from '@repo/web/components/ui/Button/SubmitButton';
import {
  Mentee,
  MenteeProfileEditFormType,
} from '@repo/web/components/types/mentee/MenteeType';
import MenteeProfileEditForm from '@repo/web/components/form/MenteeProfileEditForm';
import { PutUserTotalInfo } from '@repo/web/actions/mentee/mypageAction';

interface MenteeProfileEditProps {
  mentee: Mentee;
  onUpdate: (updatedMentee: Mentee) => void;
}

export default function MentorProfileEdit({
  mentee,
  onUpdate,
}: MenteeProfileEditProps) {
  const [formData, setFormData] = useState<MenteeProfileEditFormType>({
    profileImageUrl: mentee.profileImageUrl,
    nickName: mentee.memberRequestDto.nickName,
    phoneNumber: mentee.memberRequestDto.phoneNumber,
    age: mentee.menteeProfileRequestDto.age,
    gender: mentee.menteeProfileRequestDto.gender,
    occupationStatus: mentee.menteeProfileRequestDto.occupationStatus,
    educationLevel: mentee.menteeProfileRequestDto.educationLevel,
    jobExperience: mentee.menteeProfileRequestDto.jobExperience,
    jobType: mentee.menteeProfileRequestDto.jobType,
    jobApplicationCount: mentee.menteeProfileRequestDto.jobApplicationCount,
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await PutUserTotalInfo({ formData, imageFile: file });

    console.log(formData);
    console.log(file);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-3xl">
      <MenteeProfileEditForm
        formData={formData}
        file={file}
        setFile={setFile}
        setFormData={setFormData}
      />
      <SubmitButton title="Update Profile" />
    </form>
  );
}

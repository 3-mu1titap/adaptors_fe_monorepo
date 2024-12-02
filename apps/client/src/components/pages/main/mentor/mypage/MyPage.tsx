'use client';

import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs';
import { Mentor } from '@repo/client/components/types/main/mentor/mentorTypes';
import MentorProfile from './mentor-profile/MentorProfile';
import MentorProfileEdit from './mentor-profile-edit/MentorProfileEdit';
import MentorSessionList from './MentoringSessionList';

const mockMentor: Mentor = {
  profileImageUrl:
    'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1732604594876-mentor1.png',
  memberRequestDto: {
    name: '정토미',
    nickName: '토미누나다',
    email: 'tommy12345678@gmail.com',
    accountId: 'tommy0720111',
    phoneNumber: '01012341234',
  },
  mentorProfileRequestDto: {
    mentoringField: '면접',
    age: 27,
    gender: 'FEMALE',
    jobExperience: '3년',
  },
};

export default function MyPage() {
  const [mentor, setMentor] = useState<Mentor>(mockMentor);

  const handleProfileUpdate = (updatedMentor: Mentor) => {
    setMentor(updatedMentor);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="hidden">My Page</h1>
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="edit">Edit Profile</TabsTrigger>
          <TabsTrigger value="sessions">Mentoring Sessions</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <MentorProfile mentor={mentor} />
        </TabsContent>
        <TabsContent value="edit">
          <MentorProfileEdit mentor={mentor} onUpdate={handleProfileUpdate} />
        </TabsContent>
        <TabsContent value="sessions">
          <MentorSessionList mentorId={mentor.memberRequestDto.accountId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

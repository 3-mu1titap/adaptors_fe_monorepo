'use client';

import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs';
import { Mentor } from '@repo/admin/components/types/main/mentor/mentorTypes';
import MentorProfile from './mentor-profile/MentorProfile';
import MentorProfileEdit from './mentor-profile-edit/MentorProfileEdit';
import MentorSessionList from './MentoringSessionList';

export default function MyPage({ userInfo }: { userInfo: Mentor }) {
  const [mentor, setMentor] = useState<Mentor>(userInfo);

  const handleProfileUpdate = (updatedMentor: Mentor) => {
    setMentor(updatedMentor);
  };

  return (
    <section className="w-full px-10 py-5 mt-[5rem]">
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
    </section>
  );
}

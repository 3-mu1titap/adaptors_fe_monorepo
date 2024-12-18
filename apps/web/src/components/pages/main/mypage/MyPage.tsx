'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs';
import { useState } from 'react';

import { Mentee } from '@repo/web/components/types/mentee/MenteeType';

import MenteeProfileEdit from './edit/mentee-profile-edit/MenteeProfileEdit';
import MenteeProfile from './edit/mentee-profile/MenteeProfile';

export default function MyPage({ userInfo }: { userInfo: Mentee }) {
  const [mentee, setMentee] = useState<Mentee>(userInfo);

  const handleProfileUpdate = (updatedMentee: Mentee) => {
    setMentee(updatedMentee);
  };

  return (
    <section className="w-full h-auto flex flex-col px-4 sm:px-10 py-2">
      <h1 className="hidden">My Page</h1>
      <Tabs defaultValue="profile">
        <TabsList className="">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="edit">Edit Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <MenteeProfile mentee={mentee} />
        </TabsContent>
        <TabsContent value="edit">
          <MenteeProfileEdit mentee={mentee} onUpdate={handleProfileUpdate} />
        </TabsContent>
      </Tabs>
    </section>
  );
}

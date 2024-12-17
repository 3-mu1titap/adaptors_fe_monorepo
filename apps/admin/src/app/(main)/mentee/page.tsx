import React from 'react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import MenteeMeeting from '@repo/admin/components/pages/main/mentor/meeting/MenteeMeeting';
import { getChatProfile } from '@repo/admin/actions/chatting/chattingAction';

export const metadata: Metadata = {
  title: `Mentoring Meeting`,
};

const mentoringSessionList = [
  {
    mentoringName: '프로그래밍 기초 멘토링',
    sessionUuid: '5aca9a86-8838-48f1-9960-ffabdec746b9',
    startDate: '2024-12-04',
    endDate: '2024-12-04',
    startTime: {
      hour: 9,
      minute: 0,
      second: 0,
      nano: 0,
    },
    endTime: {
      hour: 18,
      minute: 0,
      second: 0,
      nano: 0,
    },
  },
  {
    mentoringName: '파이썬 기초 멘토링',
    sessionUuid: '9a694242-d00b-43b6-bf90-61007f601ac5',
    startDate: '2024-12-04',
    endDate: '2024-12-04',
    startTime: {
      hour: 9,
      minute: 0,
      second: 0,
      nano: 0,
    },
    endTime: {
      hour: 18,
      minute: 0,
      second: 0,
      nano: 0,
    },
  },
];

export default async function page() {
  const session = await getServerSession(options);
  const user = session?.user;
  const userData = await getChatProfile({ userUuid: user.uuid });
  return (
    <main className="w-[100vw] h=[100vh] mx-auto">
      <MenteeMeeting
        mentoringSessionList={mentoringSessionList}
        user={user}
        userData={userData}
      />
    </main>
  );
}

import Meeting from '@repo/admin/components/pages/main/mentor/meeting/Meeting';
import MentoringCopy from '@repo/admin/components/pages/main/mentor/meeting/MeetingCopy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Mentoring Meeting`,
};

const mentoringSessionList = [
  {
    mentoringName: '프로그래밍 기초 멘토링',
    sessionUuid: 'ac419217-cb98-4334-8b78-8126aa0e57aa',
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

export default async function Page() {
  return (
    <main className="container mx-auto p-4">
      {/* <Meeting mentoringSessionList={mentoringSessionList} /> */}
      {/* <MentoringCopy /> */}
    </main>
  );
}

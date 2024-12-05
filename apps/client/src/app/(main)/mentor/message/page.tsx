import Message from '@repo/client/components/pages/main/mentor/message/Message';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Chatting`,
};

const userMessageData = [
  {
    id: 'ac419217-cb98-4334-8b78-8126aa0e57aa',
    chatRequestDto: {
      memberUuid: 'string',
      message: 'string',
      sentAt: '2024-12-04T06:13:23.549Z',
    },
    mentoringRequestDto: {
      mentoringUuid: 'string',
      mentoringName: 'string',
      startDate: '2024-12-04',
      endDate: '2024-12-04',
      startTime: {
        hour: 0,
        minute: 0,
        second: 0,
        nano: 0,
      },
      endTime: {
        hour: 0,
        minute: 0,
        second: 0,
        nano: 0,
      },
    },
  },
];

export default async function Page() {
  // 채팅 방 데이터 받아오는 api 연결 해야함.
  return (
    <main className="container py-[2rem] px-[1rem]">
      <Message userMessageData={userMessageData} />
    </main>
  );
}

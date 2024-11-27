import Message from '@repo/client/components/pages/main/mentor/message/Message';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Chatting`,
};

export default async function Page() {
  // 채팅 방 데이터 받아오는 api 연결 해야함.
  return (
    <main className="container py-[2rem] px-[1rem]">
      <Message />
    </main>
  );
}

import {
  getChatProfile,
  getChattingList,
} from '@repo/admin/actions/chatting/chattingAction';
import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import Message from '@repo/admin/components/pages/main/mentor/message/Message';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: `Chatting`,
};

export default async function Page() {
  // 채팅 방 데이터 받아오는 api 연결 해야함.
  const session = await getServerSession(options);
  const user = session?.user;
  const userMessageData = await getChattingList();
  const userData = await getChatProfile({ userUuid: user.uuid });
  return (
    <main className="w-full">
      <Message
        userMessageData={userMessageData}
        user={user}
        userData={userData}
      />
    </main>
  );
}

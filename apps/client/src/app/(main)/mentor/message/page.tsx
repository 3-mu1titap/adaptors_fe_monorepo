import { Metadata } from 'next';
import Message from '../../../../components/pages/main/mentor/message/Message';
export const metadata: Metadata = {
  title: `Chatting`,
};

export default async function Page() {
  // const paricipants = await getParticipantsData();
  // 로그인한 유저 기준으로 만들어진 채팅에 대한 list 받는 api 필요
  // return으로 sessionUuid, 1대1이면 상대 닉네임 그룹의 경우 멘토링 방 이름과 세션시간 줘야함.
  return (
    <main className="container py-[2rem] px-[1rem]">
      <Message />
    </main>
  );
}

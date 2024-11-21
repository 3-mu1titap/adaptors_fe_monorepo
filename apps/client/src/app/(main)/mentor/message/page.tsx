import { Metadata } from 'next';
import Message from '../../../../components/pages/main/mentor/message/Message';
import { getParticipantsData } from '../../../../actions/meeting/meetingAction';
import { participantsData } from '../../../../components/datas/main/meeting/participantsData';

export const metadata: Metadata = {
  title: `Chatting`,
};

export default async function Page() {
  const paricipants = await getParticipantsData();
  return (
    <main className="container p-[2rem]">
      <Message participants={paricipants} />
    </main>
  );
}

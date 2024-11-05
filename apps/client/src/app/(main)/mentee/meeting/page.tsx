import { getParticipantsData } from '../../../../actions/meeting/meetingAction';
import Meeting from '../../../../components/pages/main/mentor/meeting/Meeting';

export default async function Page() {
  const paricipants = await getParticipantsData();
  return <Meeting participants={paricipants} />;
}

import { getParticipantsData } from '../../../actions/meeting/meetingAction';
import MentorLayout from '../../../components/pages/main/mentor/MentorLayout';

export default async function Page() {
  const participants = await getParticipantsData();

  return <MentorLayout participants={participants} />;
}

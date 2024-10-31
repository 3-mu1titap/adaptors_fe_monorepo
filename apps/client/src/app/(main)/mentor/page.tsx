import { getParticipantsData } from '../../../actions/meeting/meetingAction';
import MeetingRoomLayOut from '../../../components/pages/main/meeting-room/mentor/MeetingRoomLayOut';

export default async function Page() {
  const participants = await getParticipantsData();

  return <MeetingRoomLayOut participants={participants} />;
}

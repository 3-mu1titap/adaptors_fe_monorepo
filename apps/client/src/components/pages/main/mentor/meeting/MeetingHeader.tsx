import MeetingTitle from './MeetingTitle';
import MeetingParticipants from './MeetingParticipants';
import MeetingProfile from './MeetingProfile';
import { participantType } from '../../../../types/main/meeting/meetingTypes';

function MeetingHeader({ participants }: { participants: participantType[] }) {
  return (
    <header className="mx-4 mt-2 my-4 grid grid-cols-2 h-[6vh]">
      <MeetingTitle />
      <div className="grid grid-cols-2 items-center">
        <MeetingParticipants participants={participants} />
        <MeetingProfile />
      </div>
    </header>
  );
}

export default MeetingHeader;

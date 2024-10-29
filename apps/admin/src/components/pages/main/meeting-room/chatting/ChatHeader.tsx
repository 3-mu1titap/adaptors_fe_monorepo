import MyCourseIcon from '../../../../assets/icons/MyCourse';
import { participantType } from '../../../../types/main/meeting/meetingTypes';

function ChatHeader({ participants }: { participants: participantType[] }) {
  return (
    <div className="p-4 flex justify-between items-center">
      <h3 className="text-md font-bold">채팅방 제목</h3>
      <div className="flex items-center text-sm">
        <MyCourseIcon color="white" size="20" />
        <span>{participants.length} 명 참여 중</span>
      </div>
    </div>
  );
}

export default ChatHeader;

import { participantType } from '@repo/client/components/types/main/meeting/meetingTypes';
import FitImage from '@repo/client/components/ui/image/fit-image';

function MeetingParticipants({
  participants,
}: {
  participants: participantType[];
}) {
  return (
    <div className="flex space-x-[-15px]">
      {participants.slice(0, 4).map((participant, idx) => (
        <div key={idx} className="w-[40px] h-[40px]">
          <FitImage
            className="w-full h-auto overflow-hidden rounded-full border-4 border-white"
            src="/assets/images/dummy.jpg"
            alt="dummy"
          />
        </div>
      ))}
      {participants.length > 4 && (
        <div className="flex items-center justify-center w-[40px] h-[40px] text-center font-bold text-adaptorsBlue bg-[#DFEBFF] rounded-full border-4 border-white">
          +{participants.length - 4}
        </div>
      )}
    </div>
  );
}

export default MeetingParticipants;

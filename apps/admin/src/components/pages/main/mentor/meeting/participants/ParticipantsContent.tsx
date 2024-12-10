import { userType } from '@repo/admin/components/types/main/meeting/meetingTypes';
import MicOffIcon from '../../../../../assets/icons/MicOff';
import MicOnIcon from '../../../../../assets/icons/MicOn';
import VideoOffIcon from '../../../../../assets/icons/VideoOff';
import VideoOnIcon from '../../../../../assets/icons/VideoOn';
import FitImage from '@repo/admin/components/ui/image/fit-image';

function ParticipantsContent({
  participant,
  toggleMic,
  toggleVideo,
  toggleParticipantMicrophone,
  toggleParticipantCamera,
}: {
  participant: userType;
  toggleMic: (id: string) => void;
  toggleVideo: (id: string) => void;
  toggleParticipantMicrophone: (participantIdentity: string) => Promise<void>;
  toggleParticipantCamera: (participantIdentity: string) => Promise<void>;
}) {
  return (
    <div className="rounded-full bg-[#F5F5F5] p-[1px] grid grid-cols-6 items-center my-2">
      <FitImage
        src="/assets/images/dummy.jpg"
        alt={`${participant.nickname}'s profile`}
        className="w-5 h-5 ml-3 rounded-full flex items-center justify-center overflow-hidden"
      />
      <h4 className="text-sm col-span-3 ml-3">{participant.nickname}</h4>
      <button
        onClick={() => toggleParticipantMicrophone('Participant61')}
        className={'p-2 rounded-full'}
      >
        {participant.micOn ? <MicOnIcon /> : <MicOffIcon />}
      </button>
      <button
        onClick={() => toggleParticipantCamera('Participant61')}
        className={'p-2 rounded-full'}
      >
        {participant.videoOn ? <VideoOnIcon /> : <VideoOffIcon />}
      </button>
    </div>
  );
}

export default ParticipantsContent;

'use client';

import { useEffect, useState } from 'react';
import ParticipantsTitle from './ParticipantsTitle';
import ParticipantsContent from './ParticipantsContent';
import {
  participantType,
  userType,
} from '@repo/client/components/types/main/meeting/meetingTypes';

function Participants({
  participants,
  toggleParticipantMicrophone,
  toggleParticipantCamera,
}: {
  participants: participantType[];
  toggleParticipantMicrophone: (participantIdentity: string) => Promise<void>;
  toggleParticipantCamera: (participantIdentity: string) => Promise<void>;
}) {
  const [users, setUsers] = useState<userType[]>([]);

  const toggleMic = (id: string) => {
    setUsers(
      users.map((p) => (p.userUuid === id ? { ...p, micOn: !p.micOn } : p))
    );
  };

  const toggleVideo = (id: string) => {
    setUsers(
      users.map((p) => (p.userUuid === id ? { ...p, videoOn: !p.videoOn } : p))
    );
  };

  useEffect(() => {
    setUsers(
      participants.map((participant) => ({
        ...participant,
        micOn: true,
        videoOn: true,
      }))
    );
  }, [participants]);

  return (
    <div className="py-2 px-4 h-full border overflow-y-auto">
      <ParticipantsTitle />
      <div>
        {users.map((participant) => (
          <ParticipantsContent
            key={participant.userUuid}
            participant={participant}
            toggleMic={toggleMic}
            toggleVideo={toggleVideo}
            toggleParticipantMicrophone={toggleParticipantMicrophone}
            toggleParticipantCamera={toggleParticipantCamera}
          />
        ))}
      </div>
    </div>
  );
}

export default Participants;

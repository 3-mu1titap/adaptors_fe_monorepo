'use client';

import { useEffect, useState } from 'react';
import ParticipantsTitle from './ParticipantsTitle';
import ParticipantsContent from './ParticipantsContent';
import {
  participantType,
  userType,
} from '../../../../../types/main/meeting/meetingTypes';

function Participants({ participants }: { participants: participantType[] }) {
  const [users, setUsers] = useState<userType[]>([]);

  const toggleMic = (id: number) => {
    setUsers(users.map((p) => (p.id === id ? { ...p, micOn: !p.micOn } : p)));
  };

  const toggleVideo = (id: number) => {
    setUsers(
      users.map((p) => (p.id === id ? { ...p, videoOn: !p.videoOn } : p))
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
            key={participant.id}
            participant={participant}
            toggleMic={toggleMic}
            toggleVideo={toggleVideo}
          />
        ))}
      </div>
    </div>
  );
}

export default Participants;

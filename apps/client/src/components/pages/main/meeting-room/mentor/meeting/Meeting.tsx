import React from 'react';
import Chatting from '../../chatting/Chatting';
import MeetingHeader from './MeetingHeader';
import Participants from '../participants/Participants';
import { participantType } from '../../../../../types/main/meeting/meetingTypes';

function Meeting({ participants }: { participants: participantType[] }) {
  return (
    <div className="w-full">
      <MeetingHeader participants={participants} />
      <div className="grid grid-cols-7 h-[calc(100vh-78px)]">
        <div className="col-span-5 bg-[#FAFAFE]">여기에 영상</div>
        <div className="flex flex-col col-span-2 h-full max-h-[calc(100vh-78px)]">
          <div className="h-2/5">
            <Participants participants={participants} />
          </div>
          <div className="h-3/5">
            <Chatting participants={participants} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;

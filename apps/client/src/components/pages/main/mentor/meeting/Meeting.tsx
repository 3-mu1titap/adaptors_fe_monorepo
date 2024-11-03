import React from 'react';
import MeetingHeader from './MeetingHeader';
import Participants from './participants/Participants';
import { participantType } from '../../../../types/main/meeting/meetingTypes';
import Chatting from '../../chatting/Chatting';

function Meeting({ participants }: { participants: participantType[] }) {
  return (
    <>
      <MeetingHeader participants={participants} />
      <div className="grid grid-cols-7 h-[90vh]">
        <div className="col-span-5 bg-[#FAFAFE]">여기에 영상</div>
        <div className="flex flex-col col-span-2">
          <div className="h-2/5">
            <Participants participants={participants} />
          </div>
          <div className="h-3/5">
            <Chatting participants={participants} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Meeting;

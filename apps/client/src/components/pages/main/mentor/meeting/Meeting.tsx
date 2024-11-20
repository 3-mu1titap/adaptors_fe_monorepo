import React from 'react';
import MeetingHeader from './MeetingHeader';
import Participants from './participants/Participants';
import { participantType } from '../../../../types/main/meeting/meetingTypes';
import Chatting from '../../chatting/Chatting';
import VideoComponent from './AdaptorsVideo';

async function Meeting({ participants }: { participants: participantType[] }) {
  return (
    <>
      <MeetingHeader participants={participants} />
      <div className="grid grid-cols-7 h-[90vh]">
        <div className="col-span-5 bg-[#FAFAFE]">
          <VideoComponent />
        </div>
        <div className="flex flex-col col-span-2 h-full">
          <div className="h-[36vh]">
            <Participants participants={participants} />
          </div>
          <div className="h-[54vh]">
            <Chatting participants={participants} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Meeting;

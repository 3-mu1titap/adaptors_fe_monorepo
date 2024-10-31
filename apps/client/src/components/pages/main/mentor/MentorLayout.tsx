'use client';

import { useState } from 'react';
import { participantType } from '../../../types/main/meeting/meetingTypes';
import useFunnel from '../../../common/Funnel/useFunnel';
import MeetingRoomNav from '../../../aside/metting-room/MeetingRoomNav';
import Funnel from '../../../common/Funnel/Funnel';
import Meeting from './meeting/Meeting';
import Calendar from './Calendar/Calendar';

const steps = [
  'Overview',
  'Meeting',
  'Calendar',
  'Messages',
  'My Course',
  'Setting',
  'Help',
  'Log Out',
];

function MentorLayout({ participants }: { participants: participantType[] }) {
  const { level, step, onSelectStep } = useFunnel({ steps });
  const [navVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible((prev) => !prev);
  };

  return (
    <main className="grid grid-cols-7 w-full h-screen min-w-[1024px]">
      <div
        className={`transition-opacity duration-300  ${!navVisible && 'hidden'}`}
      >
        <MeetingRoomNav level={level} onSelectStep={onSelectStep} />
      </div>
      <div className={`relative ${navVisible ? 'col-span-6' : 'col-span-7'}`}>
        <button
          className={`absolute z-10 w-6 h-[200px] bg-gray-300 rounded-full transition-all duration-300 transform -left-3 top-[calc((100vh-200px)/2)] flex items-center justify-center`}
          onClick={toggleNav}
        >
          <span className={`text-xl text-white ${!navVisible && 'ml-3'}`}>
            {navVisible ? '<' : '>'}
          </span>
        </button>
        <Funnel step={step}>
          <Funnel.Step name="Overview">
            <div>1</div>
          </Funnel.Step>
          <Funnel.Step name="Meeting">
            <Meeting participants={participants} />
          </Funnel.Step>
          <Funnel.Step name="Calendar">
            <Calendar />
          </Funnel.Step>
          <Funnel.Step name="Messages">
            <div>4</div>
          </Funnel.Step>
          <Funnel.Step name="My Course">
            <div>5</div>
          </Funnel.Step>
          <Funnel.Step name="Setting">
            <div>6</div>
          </Funnel.Step>
          <Funnel.Step name="Help">
            <div>7</div>
          </Funnel.Step>
          <Funnel.Step name="Log Out">
            <div>8</div>
          </Funnel.Step>
        </Funnel>
      </div>
    </main>
  );
}

export default MentorLayout;

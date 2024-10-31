'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MeetingRoomNav from '../../../../aside/metting-room/MeetingRoomNav';
import Funnel from '../../../../common/Funnel/Funnel';
import useFunnel from '../../../../common/Funnel/useFunnel';
import { participantType } from '../../../../types/main/meeting/meetingTypes';
import Meeting from './meeting/Meeting';

const steps = [
  'Overview',
  'Meeting',
  'Messages',
  'My Course',
  'Setting',
  'Help',
  'Log Out',
];

function MeetingRoomLayOut({
  participants,
}: {
  participants: participantType[];
}) {
  const { level, step, onSelectStep } = useFunnel({ steps });
  const [navVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible((prev) => !prev);
  };

  return (
    <main className="grid grid-cols-7 w-full h-screen min-w-[1024px]">
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: navVisible ? 0 : -250,
        }}
        exit={{ x: 250 }}
        transition={{ duration: 0.4 }}
        className={`${!navVisible && 'hidden'}`}
      >
        {navVisible && (
          <MeetingRoomNav level={level} onSelectStep={onSelectStep} />
        )}
      </motion.div>
      <button
        className={`absolute z-10 w-6 h-[78px] bg-gray-300 rounded-full transition-all duration-300 transform -left-3 top-[calc((100vh-78px)/2)] flex items-center justify-center`}
        onClick={toggleNav}
      >
        <span className={`text-xl text-white ml-3`}>
          {navVisible ? '<' : '>'}
        </span>
      </button>
      <div className={`col-span-${navVisible ? '6' : '7'} relative`}>
        <Funnel step={step}>
          <Funnel.Step name="Overview">
            <div>1</div>
          </Funnel.Step>
          <Funnel.Step name="Meeting">
            <Meeting participants={participants} />
          </Funnel.Step>
          <Funnel.Step name="Messages">
            <div>3</div>
          </Funnel.Step>
          <Funnel.Step name="My Course">
            <div>4</div>
          </Funnel.Step>
          <Funnel.Step name="Setting">
            <div>5</div>
          </Funnel.Step>
          <Funnel.Step name="Help">
            <div>6</div>
          </Funnel.Step>
          <Funnel.Step name="Log Out">
            <div>7</div>
          </Funnel.Step>
        </Funnel>
      </div>
    </main>
  );
}

export default MeetingRoomLayOut;

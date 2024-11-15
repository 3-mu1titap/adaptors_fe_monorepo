'use client';
import { useEffect, useState } from 'react';

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // 12-hour format
  return `${period} ${formattedHours}:${String(now.getMinutes()).padStart(2, '0')}`;
};

const NowDate = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const now = new Date();
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}.${weekDays[now.getDay()]}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 정리
  }, []);

  return (
    <div className="bg-[#FACE00] bg-opacity-50 p-3 rounded-xl mb-5">
      <p className="text-white font-semibold mb-2 ml-2">now time</p>
      <div className="flex justify-center gap-3 text-black font-medium">
        <span className="bg-white text-adaptorsYellow text-2xl px-2 py-2 font-semibold rounded-xl">
          {formattedDate}
        </span>
        <span className="bg-white text-adaptorsYellow text-2xl px-2 py-2 font-semibold rounded-xl">
          {currentTime}
        </span>
      </div>
    </div>
  );
};

export default NowDate;

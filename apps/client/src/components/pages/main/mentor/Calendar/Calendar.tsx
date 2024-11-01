import React from 'react';
import CalendarHeader from './CalendarHeader';

function Calendar() {
  return (
    <div className="w-full">
      <CalendarHeader />
      <div className="w-full h-[calc(100vh-78px)]">
        <div className="h-full bg-[#FAFAFE]">여기에 달력</div>
      </div>
    </div>
  );
}

export default Calendar;

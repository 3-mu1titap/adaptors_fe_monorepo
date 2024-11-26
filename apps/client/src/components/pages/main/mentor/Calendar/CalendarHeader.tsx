import MeetingProfile from '../meeting/MeetingProfile';

function CalendarHeader() {
  return (
    <div className="flex justify-between mx-8 mt-4 mb-2 h-[4rem]">
      <div className="flex flex-row items-center gap-x-2 text-sm">
        <h4 className="text-2xl">Calendar</h4>
      </div>
      <MeetingProfile />
    </div>
  );
}

export default CalendarHeader;

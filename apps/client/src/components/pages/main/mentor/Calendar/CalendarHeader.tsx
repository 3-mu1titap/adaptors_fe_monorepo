import FilterIcon from '../../../../assets/icons/Filter';
import MeetingProfile from '../meeting/MeetingProfile';

function CalendarHeader() {
  return (
    <div className="flex justify-between mx-4 mt-2 my-4 h-[54px]">
      <div className="flex flex-row items-center gap-x-2 text-sm">
        <h4 className="text-lg">Calendar</h4>
        <select name="" id="" className="ml-2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input type="text" />
        <div>Sort by</div>
        <div>Saved search</div>
        <FilterIcon />
        <button className="ml-2 p-2 rounded-xl text-white bg-[#083FAA]">
          Add New
        </button>
      </div>
      <MeetingProfile />
    </div>
  );
}

export default CalendarHeader;

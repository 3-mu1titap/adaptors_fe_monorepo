import CalendarIcon from '../../assets/icons/Calendar';
import HelpIcon from '../../assets/icons/Help';
import LogOutIcon from '../../assets/icons/LogOut';
import MeetingIcon from '../../assets/icons/Meeting';
import MessagesIcon from '../../assets/icons/Messages';
import MyCourseIcon from '../../assets/icons/MyCourse';
import OverviewIcon from '../../assets/icons/Overview';
import SettingIcon from '../../assets/icons/Setting';
import MeetingRoomNavCategory from './MeetingRoomNavCategory';

const categoryItems = [
  { id: 0, Icon: OverviewIcon, label: 'Overview' },
  { id: 1, Icon: MeetingIcon, label: 'Meeting' },
  { id: 2, Icon: CalendarIcon, label: 'Calendar' },
  { id: 3, Icon: MessagesIcon, label: 'Messages' },
  { id: 4, Icon: MyCourseIcon, label: 'My Course' },
  { id: 5, Icon: SettingIcon, label: 'Setting' },
  { id: 6, Icon: HelpIcon, label: 'Help' },
  { id: 7, Icon: LogOutIcon, label: 'Log Out' },
];

function MeetingRoomNavCategories({
  level,
  onSelectStep,
}: {
  level: number;
  onSelectStep: (num: number) => void;
}) {
  return (
    <nav className="w-full flex flex-col justify-center items-center ">
      <ul className="w-full flex flex-col justify-center items-center text-lg">
        {categoryItems.map(({ id, Icon, label }) => (
          <MeetingRoomNavCategory
            key={id}
            isActive={level === id}
            onClick={() => onSelectStep(id)}
            icon={<Icon color={level === id ? '#0060FF' : '#ACACAC'} />}
            label={label}
          />
        ))}
      </ul>
    </nav>
  );
}

export default MeetingRoomNavCategories;

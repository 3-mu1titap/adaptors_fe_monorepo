import { GetMentoringSessionList } from '../../../../actions/mentoring/mentoringAction';
import { MentoringSessionDataType } from '../../../types/mentoring/mentoringTypes';
import Calendar from './Calendar';
import MentoProfile from './MentoProfile';
import MentoringOverview from './MentoringOverview';
import NowDate from './NowDate';
import SessionList from './SessionList';

interface MentoringSession {
  id: number;
  date: string;
  time: string;
  status: 'available' | 'pending' | 'booked' | '';
  statusMessage: string;
  participants: number;
  additionalParticipants: number;
  reviews: number;
  buttonText: string;
  buttonStyle: 'yellow' | 'gray' | 'dark';
}

interface CalendarDay {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  hasSession: boolean;
  isSelected: boolean;
}
export const sessions: MentoringSession[] = [
  {
    id: 1,
    date: '2024.11.12',
    time: 'S 13:00 - E 14:00',
    status: 'available',
    statusMessage: '해당 섹션은 종료되었습니다.',
    participants: 78,
    additionalParticipants: 9,
    reviews: 78,
    buttonText: '종료',
    buttonStyle: 'gray',
  },
  {
    id: 2,
    date: '2024.11.12',
    time: 'S 18:00 - E 19:00',
    status: 'pending',
    statusMessage: '긴급공지',
    participants: 0,
    additionalParticipants: 9,
    reviews: 0,
    buttonText: '진행중',
    buttonStyle: 'dark',
  },
  {
    id: 3,
    date: '2024.11.12',
    time: 'S 21:00 - E 22:00',
    status: 'available',
    statusMessage: '남은 자리 19',
    participants: 1,
    additionalParticipants: 0,
    reviews: 0,
    buttonText: '참가하기',
    buttonStyle: 'yellow',
  },
  {
    id: 4,
    date: '2024.11.13',
    time: 'S 21:00 - E 22:00',
    status: 'available',
    statusMessage: '남은 자리 2 - 마감임박',
    participants: 45,
    additionalParticipants: 10,
    reviews: 0,
    buttonText: '참가하기',
    buttonStyle: 'yellow',
  },
  {
    id: 5,
    date: '2024.11.13',
    time: 'S 21:00 - E 22:00',
    status: 'booked',
    statusMessage: '마감되었습니다.',
    participants: 45,
    additionalParticipants: 16,
    reviews: 0,
    buttonText: '마감',
    buttonStyle: 'dark',
  },
];

const getCurrentTime = () => {
  const now = new Date();
  return `PM ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
};

export default async function MentoringCalendar({
  mentoringDate,
}: {
  mentoringSessionList: MentoringSessionDataType[];
  mentoringDate: string;
}) {
  // const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(getCurrentTime());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  const mentoringSessionList = await GetMentoringSessionList();
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Left Section */}
      <section className="w-[400px] p-6 bg-white border-r border-gray-200">
        <div className="space-y-6">
          <MentoProfile />
          {/* Date Display */}
          <NowDate />
          {/* Calendar */}
          <Calendar />
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-1 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <MentoringOverview />
          <SessionList mentoringSessionList={mentoringSessionList} />
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import CalendarContent from '../../../../components/pages/main/mentor/Calendar/CalendarContent';
import CalendarHeader from '../../../../components/pages/main/mentor/Calendar/CalendarHeader';
import { GetScheduleList } from '../../../../actions/schedule/scheduleAction';

export const metadata: Metadata = {
  title: `Schedule`,
};

export default async function Page() {
  const scheduleList = await GetScheduleList('2024-11');

  return (
    <div className="w-full">
      <CalendarHeader />
      <div className="w-full h-full">
        <div className="h-full px-4 mb-6 bg-[#FAFAFE]">
          <CalendarContent scheduleList={scheduleList} />
        </div>
      </div>
    </div>
  );
}

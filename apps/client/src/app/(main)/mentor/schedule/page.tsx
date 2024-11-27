import { GetScheduleList } from '@repo/client/actions/schedule/scheduleAction';
import CalendarHeader from '@repo/client/components/header/CalendarHeader';
import CalendarContent from '@repo/client/components/pages/main/mentor/Calendar/CalendarContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Schedule`,
};

export default async function Page() {
  const scheduleList = await GetScheduleList('2024-11');

  return (
    <main className="w-full">
      <CalendarHeader />
      <section className="w-full h-full">
        <div className="h-full px-4 mb-6 bg-[#FAFAFE]">
          <CalendarContent scheduleList={scheduleList} />
        </div>
      </section>
    </main>
  );
}

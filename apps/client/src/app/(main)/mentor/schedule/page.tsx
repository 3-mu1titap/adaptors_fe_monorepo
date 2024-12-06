import { GetScheduleList } from '@repo/client/actions/schedule/scheduleAction';
import CalendarHeader from '@repo/client/components/header/CalendarHeader';
import CalendarContent from '@repo/client/components/pages/main/mentor/Calendar/CalendarContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Schedule`,
};

export default async function Page() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  // const scheduleList = await GetScheduleList(`${year}-${month}`);
  const scheduleList = await GetScheduleList(`2024-12`);

  return (
    <main className="w-full">
      <CalendarHeader />
      <section className="w-full h-full">
        <CalendarContent scheduleList={scheduleList} />
      </section>
    </main>
  );
}

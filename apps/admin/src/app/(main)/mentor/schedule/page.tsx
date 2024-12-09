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
    <section className="w-full px-10 py-5 mt-[5rem]">
      {/* <CalendarHeader /> */}
      <article className="w-full h-full">
        <CalendarContent scheduleList={scheduleList} />
      </article>
    </section>
  );
}

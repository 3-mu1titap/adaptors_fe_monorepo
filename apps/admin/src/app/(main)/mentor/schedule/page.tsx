import { GetScheduleList } from '@repo/admin/actions/schedule/scheduleAction';
import CalendarHeader from '@repo/admin/components/header/CalendarHeader';
import CalendarContent from '@repo/admin/components/pages/main/mentor/Calendar/CalendarContent';
import { getDate } from '@repo/admin/components/utils/dateUtil';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Schedule`,
};

export default async function Page() {
  const scheduleList = await GetScheduleList({
    startDate: getDate({ type: false }),
    endDate: getDate({ date: 90, type: false }),
  });

  return (
    <section className="w-full">
      {/* <CalendarHeader /> */}
      <article className="w-full h-full">
        <CalendarContent scheduleList={scheduleList} />
      </article>
    </section>
  );
}

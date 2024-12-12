import { GetTodayMentoringSessionList } from '@repo/admin/actions/schedule/scheduleAction';
import Meeting from '@repo/admin/components/pages/main/mentor/meeting/Meeting';
import { getDate } from '@repo/admin/components/utils/dateUtil';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Mentoring Meeting`,
};

export default async function Page() {
  const mentoringSessionList = await GetTodayMentoringSessionList(
    getDate({ type: false })
  );
  return <Meeting mentoringSessionList={mentoringSessionList} />;
}

import { MentoringSessionList } from '@components/types/mentoring/mentoringTypes';
import Calendar from './Calendar';
import MentoProfile from './MentoProfile';
import NowDate from './NowDate';

export default function MentorSection({
  mentorUuid,
  mentoringSessionList,
}: {
  mentorUuid: string;
  mentoringSessionList: MentoringSessionList | [];
}) {
  return (
    <section className="w-full sm:w-[350px] p-6 bg-white border-r border-gray-200">
      <div className="space-y-6">
        <MentoProfile mentorUuid={mentorUuid} />
        <NowDate />
        <Calendar mentoringSessionList={mentoringSessionList} />
      </div>
    </section>
  );
}

import { MentoringResult } from '@components/types/mentoring/mentoringTypes';
import Calendar from './Calendar';
import MentoProfile from './MentoProfile';
import NowDate from './NowDate';
import { getProfileIamge } from 'src/actions/profile/getProfileData';

export default async function MentorSection({
  mentorUuid,
  mentoringSessionList,
}: {
  mentorUuid: string;
  mentoringSessionList: MentoringResult[] | [];
}) {
  const mentorProfile = await getProfileIamge(mentorUuid);
  return (
    <section className="w-full sm:w-[350px] p-6 bg-white border-r border-gray-200">
      <div className="space-y-6">
        <MentoProfile mentorUuid={mentorUuid} mentorProfile={mentorProfile} />
        <NowDate />
        <Calendar mentoringSessionList={mentoringSessionList} />
      </div>
    </section>
  );
}

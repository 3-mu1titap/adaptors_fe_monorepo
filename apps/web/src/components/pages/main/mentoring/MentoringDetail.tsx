import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../actions/mentoring/mentoringAction';
import { MentoringDataType } from '../../../types/mentoring/mentoringTypes';
import Calendar from './Calendar';
import MentoProfile from './MentoProfile';
import MentoringOverview from './MentoringOverview';
import NowDate from './NowDate';
import SessionList from './SessionList';

export default async function MentoringCalendar({
  mentoringDate,
}: {
  mentoringDate: string;
}) {
  const mentoringSessionList = await GetMentoringSessionList(
    'c5724f22-361d-4b84-9dd2-56fafee0043c'
  );
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    'c5724f22-361d-4b84-9dd2-56fafee0043c'
  );
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Left Section */}
      <section className="w-[300px] p-6 bg-white border-r border-gray-200">
        <div className="space-y-6">
          <MentoProfile
            mentorUuid={
              MentoringInfoData?.mentorUuid ? MentoringInfoData?.mentorUuid : ''
            }
          />
          <NowDate />
          <Calendar mentoringSessionList={mentoringSessionList} />
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-1 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {MentoringInfoData && (
            <MentoringOverview MentoringInfoData={MentoringInfoData} />
          )}
          <SessionList
            mentoringSessionList={mentoringSessionList}
            mentoringName={MentoringInfoData?.name}
            mentoringDate={mentoringDate}
          />
        </div>
      </section>
    </div>
  );
}

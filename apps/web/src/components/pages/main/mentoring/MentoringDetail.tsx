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
    '3ec830b8-fade-4103-afef-4c633927c012'
  );
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    '3ec830b8-fade-4103-afef-4c633927c012'
  );
  console.log(mentoringSessionList);
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 sm:flex-row">
      {/* Left Section */}
      <section className="w-[350px] p-6 bg-white border-r border-gray-200">
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
      <section className="flex-1 mt-6 sm:p-6 w-full">
        <div className="max-w-4xl mx-auto space-y-6">
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

import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../actions/mentoring/mentoringAction';
import {
  MentoringDataType,
  MentoringResult,
} from '../../../types/mentoring/mentoringTypes';
import MentoringOverview from './MentoringOverview';
import MentorSection from './MentorSection';
import MentoringReviewSection from './review/MentoringReviewSection';
import SessionList from './SessionList';
export default async function MentoringCalendar({
  mentoringDate,
  mentoringUuid,
}: {
  mentoringDate: string;
  mentoringUuid: string;
}) {
  const mentoringSessionList: MentoringResult[] | [] =
    await GetMentoringSessionList('8e68777e-47ae-46c6-a42b-389d459c8f21');
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    '8e68777e-47ae-46c6-a42b-389d459c8f21'
  );
  // const mentoringSessionList: MentoringResult[] | [] =
  //   await GetMentoringSessionList(mentoringUuid);
  // const MentoringInfoData: MentoringDataType | null =
  //   await GetMentoringInfo(mentoringUuid);
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 sm:flex-row">
      {/* Left Section */}
      <MentorSection
        mentorUuid={
          MentoringInfoData?.mentorUuid ? MentoringInfoData?.mentorUuid : ''
        }
        mentoringSessionList={mentoringSessionList}
      />
      {/* Right Section */}
      <section className="flex-1 mt-6 sm:p-6 w-full">
        <div className="max-w-4xl mx-auto space-y-6">
          {MentoringInfoData && (
            <MentoringOverview MentoringInfoData={MentoringInfoData} />
          )}
          {MentoringInfoData && (
            <SessionList
              mentoringSessionList={mentoringSessionList}
              mentoringName={MentoringInfoData.name}
              mentoringDate={mentoringDate}
              mentorUuid={MentoringInfoData.mentorUuid}
            />
          )}
          <MentoringReviewSection />
        </div>
      </section>
    </div>
  );
}

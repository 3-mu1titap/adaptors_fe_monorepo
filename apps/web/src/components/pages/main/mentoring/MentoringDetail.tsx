import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../actions/mentoring/mentoringAction';
import { MentoringDataType } from '../../../types/mentoring/mentoringTypes';
import MentoringOverview from './MentoringOverview';
import MentorSection from './MentorSection';
import MentoringReviewSection from './review/MentoringReviewSection';
import SessionList from './SessionList';
export default async function MentoringCalendar({
  mentoringDate,
}: {
  mentoringDate: string;
}) {
  const mentoringSessionList = await GetMentoringSessionList(
    '05b8b889-9798-4f31-88e5-f6b967cb069d'
  );
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    '05b8b889-9798-4f31-88e5-f6b967cb069d'
  );
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
          <MentoringReviewSection />
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

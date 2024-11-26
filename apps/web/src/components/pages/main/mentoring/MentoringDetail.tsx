import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../actions/mentoring/mentoringAction';
import { MentoringDataType } from '../../../types/mentoring/mentoringTypes';
import MentoringOverview from './MentoringOverview';
import MentorSection from './MentorSection';
import SessionList from './SessionList';

export default async function MentoringCalendar({
  mentoringDate,
}: {
  mentoringDate: string;
}) {
  const mentoringSessionList = await GetMentoringSessionList(
    'f7636d8c-1a1f-46a9-86ba-8868e07e8260'
  );
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    'f7636d8c-1a1f-46a9-86ba-8868e07e8260'
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
          <MentoringReview reviews={reviews} />
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

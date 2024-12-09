import {
  MentoringDataType,
  MentoringResult,
} from '@components/types/mentoring/mentoringTypes';
import MentoringOverview from './MentoringOverview';
import MentorSection from './MentorSection';
import MentoringReviewSection from './review/MentoringReviewSection';
import SessionList from './SessionList';

export default function MentoringDetail({
  mentoringDate,
  mentoringUuid,
  mentoringSessionList,
  MentoringInfoData,
}: {
  mentoringDate: string;
  mentoringUuid: string;
  mentoringSessionList: MentoringResult[];
  MentoringInfoData: MentoringDataType | null;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 sm:flex-row">
      {/* Left Section */}
      {/* <MentorSection
        mentorUuid={MentoringInfoData?.mentorUuid || ''}
        mentoringSessionList={mentoringSessionList}
      /> */}
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

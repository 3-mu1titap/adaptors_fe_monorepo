import MentorSection from '@components/pages/main/mentoring/MentorSection';
import MentoringReviewSection from '@components/pages/main/mentoring/review/MentoringReviewSection';
import { MentoringDataType } from '@components/types/mentoring/mentoringTypes';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from 'src/actions/mentoring/mentoringAction';

export default async function page() {
  const mentoringSessionList = await GetMentoringSessionList(
    'f7636d8c-1a1f-46a9-86ba-8868e07e8260'
  );
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    'f7636d8c-1a1f-46a9-86ba-8868e07e8260'
  );
  return (
    <CommonLayout className="flex">
      <MentorSection
        mentorUuid={
          MentoringInfoData?.mentorUuid ? MentoringInfoData?.mentorUuid : ''
        }
        mentoringSessionList={mentoringSessionList}
      />
      <MentoringReviewSection />
    </CommonLayout>
  );
}

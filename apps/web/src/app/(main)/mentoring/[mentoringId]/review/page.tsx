import MentoringReviewSection from '@components/pages/main/mentoring/review/MentoringReviewSection';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';

export default async function page() {
  // const mentoringSessionList = await GetMentoringSessionList(
  //   'f2a5b181-f1c3-4ad9-aa73-3d1bca4f5ad3'
  // );
  // const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
  //   'f2a5b181-f1c3-4ad9-aa73-3d1bca4f5ad3'
  // );
  return (
    <CommonLayout>
      {/* <MentorSection
        mentorUuid={
          MentoringInfoData?.mentorUuid ? MentoringInfoData?.mentorUuid : ''
        }
        mentoringSessionList={mentoringSessionList}
      /> */}
      <MentoringReviewSection />
    </CommonLayout>
  );
}

import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { MentoringDataType } from '@repo/ui/types/CommonType.js';
import { getBestRevieweList } from '@repo/web/actions/review/mentoringReview';
import MentoringReview from '@repo/web/components/pages/main/mentoring/review/MentoringReview';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from 'src/actions/mentoring/mentoringAction';

export default async function page({
  searchParams,
}: {
  searchParams: {
    mentoring: string;
    mentor: string;
  };
}) {
  const mentoringSessionList = await GetMentoringSessionList(
    searchParams.mentoring
  );
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    searchParams.mentoring
  );
  const BestRevieweList = await getBestRevieweList(searchParams.mentoring);
  return (
    <CommonLayout className="flex">
      <MentoringReview comments={BestRevieweList} />
    </CommonLayout>
  );
}

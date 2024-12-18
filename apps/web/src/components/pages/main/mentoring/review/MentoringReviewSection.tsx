'use client';

import { Card } from '@repo/ui/components/ui/card';

import { Review } from '@repo/ui/types/ReviewType.js';
import ChevronText from '@repo/web/components/ui/Text/ChevronText';
import MentoringReview from './MentoringReview';
// import MentoringReview from './MentoringReview';
export default function MentoringReviewSection({
  reviewList,
}: {
  reviewList: Review[];
}) {
  const mentroingUuid = reviewList[0]?.reviewRequestDto.mentoringUuid;
  const mentrUuid = reviewList[0]?.reviewRequestDto.mentorUuid;
  return (
    <Card className="w-full ">
      <div className="flex justify-between items-center px-7 py-4">
        <ChevronText text="수강후기" />
        {/* <Link
          href={`/mentoring/1/review?mentoring=${mentroingUuid}&mentor=${mentrUuid}`}
          className="text-lg border border-adaptorsGray py-2.5 px-6 rounded-md"
          disabled={true}
        >
          Read more
        </Link> */}
      </div>
      <MentoringReview comments={reviewList} />
    </Card>
  );
}

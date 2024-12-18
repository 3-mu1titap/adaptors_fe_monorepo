import React from 'react';
import ReviewTitleSection from './ReviewTitle';
import ReviewCard from './ReviewCard';
import {
  memberRequestDto,
  RecentReviewResType,
  reviewRequestDto,
} from '@repo/web/components/types/Review/ReviewType';
import Link from 'next/link';
function ReviewSection({
  review,
  userUuid,
}: {
  review: RecentReviewResType[];
  userUuid: string;
}) {
  return (
    <div className="py-3 h-auto min-h-[55rem] p-6 rounded-xl mt-10">
      <ReviewTitleSection title="수강평" subtitle="reviewer" />

      <div className="">
        <ul className="flex flex-col gap-y-3">
          {review && review.length > 0 ? (
            <>
              {review.map(
                (item: {
                  reviewRequestDto: reviewRequestDto;
                  memberRequestDto: memberRequestDto;
                }) => (
                  <ReviewCard
                    review={item.reviewRequestDto}
                    memberInfo={item.memberRequestDto}
                  />
                )
              )}
            </>
          ) : (
            <div>수강평이 없습니다</div>
          )}
        </ul>

        <div className="flex justify-center items-center mt-4">
          <Link href={`/mentor/${userUuid}/review`}>
            <button
              className="bg-yellow-200 py-3 px-4 rounded-lg"
              disabled={true}
            >
              전체보기
            </button>
          </Link>
        </div>

        <div className="h-[1px] bg-gray-200 mt-10"></div>
      </div>
    </div>
  );
}

export default ReviewSection;

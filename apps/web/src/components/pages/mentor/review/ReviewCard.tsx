import React from 'react';
import RateViewer from '@repo/web/components/common/RateViwer';
import Image from 'next/image';
import {
  reviewRequestDto,
  memberRequestDto,
} from '@repo/web/components/types/Review/ReviewType';
function ReviewCard({
  review,
  memberInfo,
}: {
  review: reviewRequestDto;
  memberInfo: memberRequestDto;
}) {
  const data = {
    id: 'RV-AE613560',
    reviewTitle: '멘토링 후기입니다',
    reviewComment:
      '멘토링을 통해 제가 놓치고 있던 부분들을 꼼꼼히 짚어주셔서 많이 배웠습니다.',
    menteeUuid: '8316287a-11fa-4893-bb67-e28fe2257363',
    mentorUuid: '90691143-7dda-42e8-874e-33b826662685',
    mentoringUuid: 'f402dd39-7209-4bd3-bf6c-c1a6a886630b',
    mentoringSessionUuid: '0e5510a4-79b0-4452-926b-3d54e713a057',
    score: 4,
    wroteAt: '2024-12-11T17:24:40.073',
    deleted: false,
    nickName: '취준생재현',
    profileImageUrl:
      'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1732686722991-userDefaultImage.png',
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString); // 문자열을 Date 객체로 변환
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // 원하는 형식으로 반환
  };

  return (
    <li className="flex flex-col px-2 w-full rounded-xl border space-y-3 border-gray-200 py-3 ">
      <div className="flex items-center space-x-3">
        <span className="px-3 bg-slate-100 text-sm text-black rounded-md">
          {review.reviewTitle}
        </span>

        <span className="text-sm text-gray-400">
          {formatDate(review.wroteAt)}
        </span>
      </div>
      <RateViewer rateData={review.score} color="#fef08a" />

      <div className="flex items-center space-x-3">
        <Image src={memberInfo.profileImageUrl} width={30} height={30} alt="" />
        <span className="text-md text-black">{memberInfo.nickName}</span>
      </div>

      <span className="text-lg text-blac line-clamp-2">
        {review.reviewComment}
      </span>
    </li>
  );
}

export default ReviewCard;

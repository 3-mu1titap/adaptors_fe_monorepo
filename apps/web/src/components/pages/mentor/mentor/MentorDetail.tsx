import React from 'react';
import CurrentMentoring from '../current/CurrentMentoring';
import ReviewSection from '../review/ReviewSection';
import { SeparateContainer } from '@repo/web/components/common/layout/SeperateContainer';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import { MentorInfoType } from '@repo/web/components/types/profile/RequestType';
import { MentorMentoringListDataType } from '@repo/web/components/types/mentor/mentorType';
import { RecentReviewResType } from '@repo/web/components/types/Review/ReviewType';
import ReviewList from '../review/ReviewList';
import Link from 'next/link';

function MentorDetail({
  userUuid,
  UserProfile,
  mentoringlistdata,
  review,
}: {
  userUuid: string;
  UserProfile: MentorInfoType;
  mentoringlistdata: MentorMentoringListDataType[];
  review: RecentReviewResType[];
}) {
  return (
    <section className="flex flex-col">
      <SeparateContainer.RightSide className="flex flex-col justify-center ml-4 border-l-0 border-gray-200">
        <CustomSessionInfoTags />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 pb-3 pt-5">
          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight">
            안녕하세요! 👋 여러분의 웹개발 여정을 함께할
            <br />
            멘토 [{UserProfile.nickName}]입니다!
          </h2>
        </div>
        <p className="pb-10 text-md break-words">
          ✨ 10년 이상의 웹개발 경력을 가진 풀스택 개발자이자, 새로운 길을 찾는
          개발자분들을 돕고 싶은 멘토입니다. 웹개발은 단순히 코드를 작성하는
          일이 아니라, 문제를 해결하고 창의력을 발휘해 사용자에게 가치를
          제공하는 일이에요! 하지만, 시작하는 단계에서는 복잡한 기술과 빠르게
          변화하는 트렌드에 압도될 수도 있죠. 걱정하지 마세요! 😊 제가 여러분의
          가이드가 되어 쉽고 명확하게 방향을 제시하겠습니다. 🧭
          {/* {userIntroduction.content} */}
        </p>

        <div className="h-[1px] bg-gray-200"></div>
        {/* 현재 진행중인 멘토링 섹션 */}
        <CurrentMentoring item={mentoringlistdata.slice(0, 5)} />
        {/* 리뷰 섹션 */}
        {review && <ReviewSection review={review} />}

        <div className="flex items-center justify-center mt-5">
          <Link href={`/mentor/${userUuid}/review`}>
            <button className="text-black text-md hover:shadow-lg bg-yellow-200 rounded-lg px-4 py-2">
              전체보기
            </button>
          </Link>
        </div>
        <div className="h-[1px] bg-gray-200 mt-10"></div>
      </SeparateContainer.RightSide>
    </section>
  );
}

export default MentorDetail;

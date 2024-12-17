'use client';
import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import useIsMobile from '@repo/ui/hooks/use-mobile.tsx';
import {
  MentoringDataType,
  MentoringResult,
  SessionUser,
} from '@repo/ui/types/CommonType.ts';
import { postLikeReaction } from '@repo/web/actions/Like/like';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import Link from 'next/link';
import { useState } from 'react';
import Calendar from './Calendar';
export default function MentorSection({
  MentoringInfoData,
  mentoringSessionList,
  mentorData,
  ReviewerData,
  isCheck,
  totalLikeCount = 0,
  totalReviewCount = 0,
}: {
  MentoringInfoData: MentoringDataType;
  mentoringSessionList: MentoringResult[];
  mentorData: userProfileType;
  ReviewerData: SessionUser[];
  isCheck: boolean;
  totalLikeCount?: number;
  totalReviewCount?: number;
}) {
  const [isLiked, setIsLiked] = useState(isCheck);
  const handleLikeButton = async () => {
    await postLikeReaction(MentoringInfoData.mentorUuid);
    setIsLiked((prev) => !prev);
  };
  const isMobile = useIsMobile();
  return (
    <>
      <SeparateContainer.LeftSide className="px-4 mb-10 w-full max-w-[340px] mobile:max-x-[500px] sm:max-w-[340px] mx-auto">
        {!isMobile && (
          <>
            <CustomMentorProfilePhoto
              mentorUuid={MentoringInfoData.mentorUuid}
              profileImgUrl={mentorData.profileImageUrl}
              mentorNickname={mentorData.nickName}
            />
            <Link
              href={`/mentor/${MentoringInfoData.mentorUuid}`}
              className="text-xl font-bold my-3"
            >
              @ {mentorData.nickName}
            </Link>
            <div className="flex mt-2 justify-between items-center w-full mb-3 gap-3">
              <CustomReviewerItem
                initialUserData={ReviewerData}
                userCount={MentoringInfoData?.totalReviewCount ?? null}
                reviewCount={MentoringInfoData?.totalReviewCount ?? 0}
              />
              <CustomLikeButton
                count={totalLikeCount}
                handler={handleLikeButton}
                isCheck={isLiked}
              />
            </div>
            <CustomShareButton />
            <CustomNowDate />
          </>
        )}
        <Calendar mentoringSessionList={mentoringSessionList} />
      </SeparateContainer.LeftSide>
    </>
  );
}

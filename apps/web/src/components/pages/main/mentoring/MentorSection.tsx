'use client';
import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import {
  MentoringDataType,
  MentoringResult,
} from '@repo/ui/types/CommonType.ts';
import { ReviewerProfileType } from '@repo/ui/types/ReviewType.js';
import { postLikeReaction } from '@repo/web/actions/Like/like';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import { useState } from 'react';
import Calendar from './Calendar';
export default function MentorSection({
  MentoringInfoData,
  mentoringSessionList,
  mentorData,
  ReviewerData,
  isCheck,
}: {
  MentoringInfoData: MentoringDataType;
  mentoringSessionList: MentoringResult[];
  mentorData: userProfileType;
  ReviewerData: ReviewerProfileType[];
  isCheck: boolean;
}) {
  const [isLiked, setIsLiked] = useState(isCheck);
  const handleLikeButton = async () => {
    await postLikeReaction(MentoringInfoData.mentorUuid);
    setIsLiked((prev) => !prev);
  };
  return (
    <>
      <SeparateContainer.LeftSide className="px-4 mb-10">
        <CustomMentorProfilePhoto
          profileImgUrl={mentorData.profileImageUrl}
          mentorNickname={mentorData.nickName}
        />
        <h1 className="text-xl font-bold my-3">@ {mentorData.nickName}</h1>
        <div className="flex justify-between items-center w-full mb-3 gap-3">
          <CustomReviewerItem
            initialUserData={ReviewerData}
            userCount={MentoringInfoData?.totalReviewCount ?? null}
            reviewCount={MentoringInfoData?.totalReviewCount ?? 0}
          />
          <CustomLikeButton
            count={200823}
            handler={handleLikeButton}
            isCheck={isLiked}
          />
        </div>
        <CustomShareButton />
        <CustomNowDate />
        <Calendar mentoringSessionList={mentoringSessionList} />
      </SeparateContainer.LeftSide>
    </>
  );
}

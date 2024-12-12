'use client';
import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import { MentoringResult } from '@repo/ui/types/CommonType.ts';
import { ReviewerProfileType } from '@repo/ui/types/ReviewType.js';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import Calendar from './Calendar';
export default function MentorSection({
  mentorUuid,
  mentoringSessionList,
  mentorData,
  ReviewerData,
}: {
  mentorUuid: string;
  mentoringSessionList: MentoringResult[];
  mentorData: userProfileType;
  ReviewerData: ReviewerProfileType[];
}) {
  // console.log('MentorSection', mentorData);
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
            userCount={10}
            reviewCount={293938}
          />
          <CustomLikeButton count={200823} />
        </div>
        <CustomShareButton />
        <CustomNowDate />
        <Calendar mentoringSessionList={mentoringSessionList} />
      </SeparateContainer.LeftSide>
    </>
  );
}

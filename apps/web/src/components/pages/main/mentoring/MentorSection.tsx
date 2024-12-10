import React from 'react';
import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import { MentoringResult, SessionUser } from '@repo/ui/types/CommonType.ts';
import Calendar from './Calendar';
import { getProfileIamge } from 'src/actions/profile/getProfileData';
export default async function MentorSection({
  mentorUuid,
  mentoringSessionList,
  userData,
}: {
  mentorUuid: string;
  mentoringSessionList: MentoringResult[];
  userData: SessionUser[];
}) {
  const mentorData = await getProfileIamge(mentorUuid);

  return (
    <>
      <SeparateContainer.LeftSide>
        <CustomMentorProfilePhoto profileImgUrl={mentorData.profileImageUrl} />
        <h1 className="text-xl font-bold my-3">@ {mentorData.nickName}</h1>
        <div className="flex justify-between items-center w-full mb-3 gap-3">
          <CustomReviewerItem
            initialUserData={userData}
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

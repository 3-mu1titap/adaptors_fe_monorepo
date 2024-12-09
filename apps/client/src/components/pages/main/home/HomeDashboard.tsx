import React from 'react';
import type {
  SessionUser,
  MentoringResult,
  MentoringDataType,
} from '@repo/ui/types/CommonType.ts';
import { SeparateContainer } from '@repo/client/components/common/layouts/SeperateContainer';
import {
  CustomMentorProfilePhoto,
  CustomReviewerItem,
  CustomLikeButton,
  CustomShareButton,
  CustomNowDate,
  CustomSessionList,
  CustomSessionInfoTags,
  CustomMentorDescription,
} from '@repo/ui/components/ui/custom/index';
interface HomeDashboardProps {
  mentoringSessionList: MentoringResult[];
  MentoringInfoData: MentoringDataType;
  initialUserData: SessionUser[];
}
function HomeDashboard({
  mentoringSessionList,
  MentoringInfoData,
  initialUserData,
}: HomeDashboardProps) {
  console.log(MentoringInfoData);
  return (
    <>
      <SeparateContainer.LeftSide>
        <CustomMentorProfilePhoto profileImgUrl="https://i.pinimg.com/736x/6d/98/bd/6d98bd0a456e85177d8fbd65a54be284.jpg" />
        <h1 className="text-xl font-bold my-3">@ Mentor</h1>
        <div className="flex justify-between items-center w-full mb-3 gap-3">
          <CustomReviewerItem
            initialUserData={initialUserData}
            userCount={10}
            reviewCount={293938}
          />
          <CustomLikeButton count={200823} />
        </div>
        <CustomShareButton />
        <CustomNowDate />
      </SeparateContainer.LeftSide>
      <SeparateContainer.RightSide>
        <CustomSessionInfoTags />
        <CustomMentorDescription
          mentoringInfoData={MentoringInfoData}
          initialUserData={initialUserData}
        />
        <CustomSessionList
          filteredList={mentoringSessionList}
          mentoringName={MentoringInfoData}
        />
      </SeparateContainer.RightSide>
    </>
  );
}
export default HomeDashboard;

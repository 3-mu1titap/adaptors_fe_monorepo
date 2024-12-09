import { MentoringDataType, SessionUser } from '@repo/ui/types/CommonType.ts';
import React from 'react';
import CustomReviewerItem from './CustomReviewerItem';

function CustomMentorDescription({
  mentoringInfoData,
  initialUserData,
}: {
  mentoringInfoData: MentoringDataType;
  initialUserData: SessionUser[];
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 pb-3 pt-5">
        <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight border-l-[5px] border-l-adaptorsYellow pl-5">
          {mentoringInfoData.name}
        </h2>
        <CustomReviewerItem
          initialUserData={initialUserData}
          className="hidden lg:!flex"
          userCount={30}
          reviewCount={293938}
        />
      </div>
      <p className="pb-10 text-md break-words">{mentoringInfoData.detail}</p>
    </>
  );
}

export default CustomMentorDescription;

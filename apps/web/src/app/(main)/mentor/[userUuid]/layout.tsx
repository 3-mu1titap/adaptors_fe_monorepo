import React from 'react';
import MentorLeftSidebar from '@repo/web/components/pages/mentor/mentor/MentorLeftSide/MentorLeftSidebar';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { SeparateContainer } from '@repo/web/components/common/layout/SeperateContainer';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
function layout({
  params,
  children,
}: {
  params: { userUuid: string };
  children: React.ReactNode;
}) {
  const userUuId = params?.userUuid;

  return (
    <CommonLayout className="h-full container mx-auto max-w-[64rem]">
      <div className="flex flex-col sm:flex-col sm:max-w-[28rem] md:flex-col md:maw-w-[42rem] lg:flex-row lg:max-w-[64rem] mx-auto mt-32 overflow-x-hidden">
        <SeparateContainer.LeftSide className="flex flex-col max-w-[16rem]">
          <MentorLeftSidebar userUuid={userUuId} />
        </SeparateContainer.LeftSide>
        {children}
      </div>
    </CommonLayout>
  );
}

export default layout;

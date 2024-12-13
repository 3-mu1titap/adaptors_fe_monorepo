'use client';
import React, { useEffect, useState } from 'react';
import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import { getProfileImage } from '@repo/web/actions/profile/getProfileData';
import { SeparateContainer } from '@repo/web/components/common/layout/SeperateContainer';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';

function MentorLeftSidebar({ userUuid }: { userUuid: string }) {
  const [UserInfo, setUserInfo] = useState<userProfileType | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const UserProfile = await getProfileImage(userUuid);

        setUserInfo(UserProfile);
      } catch (err) {
        console.log('Failed to fetch user profile');
      }
    }
    fetchData();
  }, [userUuid]);

  return (
    <div className="mx-5">
      <CustomMentorProfilePhoto profileImgUrl={UserInfo?.profileImageUrl} />
      <h1 className="text-xl font-bold my-3 md:text-wrap">
        {UserInfo?.nickName}
      </h1>
      <div className="flex justify-between items-center w-full mb-3 gap-3">
        <CustomLikeButton count={200823} />
      </div>
      <CustomShareButton />
      <CustomNowDate />
    </div>
  );
}

export default MentorLeftSidebar;

import React from 'react';
import { userProfileType } from '@components/types/profile/RequestType';
import Image from 'next/image';
function MentorDetailProfile({
  userProfile,
}: {
  userProfile: userProfileType;
}) {
  return (
    <div className="min-w-[14rem] min-h-[20rem] border border-yellow-200 flex flex-col space-y-4 py-6">
      <div className="flex self-center w-[100px] h-[170px]">
        <Image
          src={userProfile.profileImageUrl}
          width={100}
          height={120}
          alt="설명"
          className="object-cover w-[100px] h-[170px]"
        ></Image>
      </div>

      <span className="text-2xl font-bold self-center">
        {userProfile.nickName}
      </span>
    </div>
  );
}

export default MentorDetailProfile;

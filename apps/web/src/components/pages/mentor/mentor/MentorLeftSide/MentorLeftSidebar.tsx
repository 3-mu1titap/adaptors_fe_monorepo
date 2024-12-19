'use client';
import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import { getProfileImage } from '@repo/web/actions/profile/getProfileData';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import { useEffect, useState } from 'react';
import { MentorBatchData } from '@repo/ui/types/batchDataType/MenterBatchData.js';
import { getIsLiked } from '@repo/web/actions/Like/like';
import { getMentorBatchData } from '@repo/web/actions/mentor/mentorAction';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';

function MentorLeftSidebar({ userUuid }: { userUuid: string }) {
  const [UserInfo, setUserInfo] = useState<userProfileType | null>(null);
  const [like, setLike] = useState(false);
  const [userData, setUserData] = useState<MentorBatchData | null>();
  useEffect(() => {
    async function fetchData() {
      try {
        const UserProfile = await getProfileImage(userUuid);

        setUserInfo(UserProfile);
      } catch (err) {
        console.log('Failed to fetch user profile');
      }
    }

    async function fetchLiked() {
      try {
        const res = await getIsLiked(userUuid);
        setLike(!res);
      } catch (error) {
        console.log('Failed to fetch user profile');
      }
    }

    async function fetchMentorData() {
      try {
        const res = await getMentorBatchData(userUuid);
        setUserData(res);
      } catch (error) {
        console.log('Failed to fetch user profile');
      }
    }
    fetchData();
    fetchLiked();
    fetchMentorData();
  }, [userUuid, like]);

  return (
    <>
      <div className="mx-5">
        <CustomMentorProfilePhoto profileImgUrl={UserInfo?.profileImageUrl} />
        <h1 className="text-xl font-bold my-3 md:text-wrap">
          @ {UserInfo?.nickName}
        </h1>

        <div className="flex items-center">
          <div className="flex  items-center w-full mb-3 gap-3">
            {userData?.totalLikeCount && (
              <CustomLikeButton
                isCheck={like}
                count={userData?.totalLikeCount || 0}
              />
            )}
          </div>

          <div className="flex mt-2  items-center w-full mb-3 gap-3">
            {userData?.totalReviewCount && (
              <CustomReviewerItem
                userCount={userData?.totalReviewCount || 0}
                initialUserData={[]}
                reviewCount={userData?.totalReviewCount || 0}
              />
            )}
          </div>
        </div>

        <CustomShareButton />
        <CustomNowDate />
      </div>
    </>
  );
}

export default MentorLeftSidebar;

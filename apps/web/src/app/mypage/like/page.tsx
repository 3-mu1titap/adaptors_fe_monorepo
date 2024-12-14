import React from 'react';
import { getLikeList } from '@repo/web/actions/Like/like';
import { getProfileImage } from '@repo/web/actions/profile/getProfileData';
import LikePage from '@repo/web/components/pages/main/mypage/like/LikePage';
async function page() {
  const res = await getLikeList();

  const resWithProfileImages = await Promise.all(
    res.map(async (item) => {
      const data = await getProfileImage(item.targetUuid);
      return {
        ...item,
        profileImageUrl: data.profileImageUrl,
        nickName: data.nickName,
      };
    })
  );

  // console.log(resWithProfileImages, 'gggggggggggggg');
  return <LikePage like={resWithProfileImages} />;
}

export default page;

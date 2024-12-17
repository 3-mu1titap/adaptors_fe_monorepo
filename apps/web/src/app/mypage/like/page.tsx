import React from 'react';
import { getLikeList } from '@repo/web/actions/Like/like';
import { getProfileImage } from '@repo/web/actions/profile/getProfileData';
import LikePage from '@repo/web/components/pages/main/mypage/like/LikePage';
import { getMentorBatchData } from '@repo/web/actions/mentor/mentorAction';
import { BestMentorType } from '@repo/web/components/types/mentor/mentorType';
async function page() {
  const res = await getLikeList();

  const MentorLikeData: BestMentorType[] = await Promise.all(
    res.map(async (item) => {
      const data = await getMentorBatchData(item.targetUuid);

      return {
        mentorUuid: item.targetUuid,
        nickName: data?.nickName || '',
        profileImageUrl: data?.profileImageUrl || '',
        totalReviewCount: data?.totalReviewCount || 0,
        reviewStarAvg: data?.reviewStarAvg || 0,
        totalLikeCount: data?.totalLikeCount || 0,
        totalSaleCount: data?.totalSaleCount || 0,
      };
    })
  );

  // console.log(MentorLikeData, 'fffffffffffffffffff');
  return (
    <>
      <section className="mt-1 py-4 h-screen overflow-y-auto container mx-auto lg:max-w-[64rem] md:max-w-[50rem] mobile:max-w-[400px] max-w-[300px]">
        <span className="block mt-36 sm:mt-32 md:mt-16 ml-4 text-2xl text-black font-bold">
          나의 관심목록
        </span>

        <div className="mt-8">
          {MentorLikeData && MentorLikeData ? (
            <>
              <LikePage like={MentorLikeData} />
            </>
          ) : (
            <div className="flex flex-col">
              <span className="text-gray-200 text-md">
                등록된 관심멘토가 없습니다..
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default page;

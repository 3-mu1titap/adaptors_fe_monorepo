import { getLikeList } from '@repo/web/actions/Like/like';
import { getMentorBatchData } from '@repo/web/actions/mentor/mentorAction';
import LikePage from '@repo/web/components/pages/main/mypage/like/LikePage';
import { BestMentorType } from '@repo/web/components/types/mentor/mentorType';
async function page() {
  const res = await getLikeList();

  // res 배열이 존재하고 길이가 1 이상인 경우에만 Promise.all 실행
  const MentorLikeData: BestMentorType[] =
    Array.isArray(res) && res.length > 0
      ? await Promise.all(
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
        )
      : []; // res가 비어있거나 null인 경우 빈 배열 반환

  // console.log(MentorLikeData, 'fffffffffffffffffff');
  return (
    <>
      <section className="mt-1 py-4 h-screen overflow-y-auto container mx-auto lg:max-w-[64rem] md:max-w-[50rem] mobile:max-w-[400px] max-w-[300px]">
        <span className="block sm:mt-32 md:mt-16 ml-4 text-2xl text-black font-bold">
          나의 관심목록
        </span>

        <div className="mt-8">
          {Array.isArray(MentorLikeData) && MentorLikeData.length > 0 ? (
            <>
              <LikePage like={MentorLikeData} />
            </>
          ) : (
            <div className="flex justify-center items-center text-xl text-black">
              등록된 관심멘토가 없습니다!
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default page;

import { GetMentorMentoringList } from 'src/actions/mentor/mentorAction';
import {
  getMentorIntroduction,
  getProfileImage,
} from 'src/actions/profile/getProfileData';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import { getMentorReview } from '@repo/web/actions/review/mentorReview';
import { SeparateContainer } from '@repo/web/components/common/layout/SeperateContainer';
import CurrentMentoring from '@repo/web/components/pages/mentor/current/CurrentMentoring';
import ReviewSection from '@repo/web/components/pages/mentor/review/ReviewSection';
import { getMentorAllReview } from '@repo/web/actions/review/mentorReview';
async function page({
  params,
}: {
  params: { userUuid: string; isRole: string };
}) {
  const userUuId = params?.userUuid;
  const isRole = params?.isRole;

  const isRoleBoolean = isRole === 'mentor' ? true : false;

  //멘토의 멘토링 리스트 조회
  const mentoringlistdata = await GetMentorMentoringList(
    userUuId,
    isRoleBoolean
  );
  // console.log(mentoringlistdata, 'mentorlistDat');

  //유저의 닉네임 프로필 조회
  const UserProfile = await getProfileImage(userUuId);
  // console.log(UserProfile, 'userProfile');

  //유저의 소개글 조회
  const userIntroduction = await getMentorIntroduction(userUuId);

  //유저의 수강평 조회
  const review = await getMentorReview(userUuId);
  // console.log(review, '조회 성공');

  const reviewAll = await getMentorAllReview(userUuId, 0);

  return (
    <SeparateContainer.RightSide className="flex flex-col justify-center border-l-0 border-gray-200">
      <CustomSessionInfoTags />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 pb-3 pt-5">
        <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight">
          안녕하세요! 👋 여러분의 웹개발 여정을 함께할
          <br />
          멘토 [{UserProfile.nickName}]입니다!
        </h2>
      </div>
      <p className="pb-10 text-md break-words">
        {userIntroduction ? userIntroduction.content : ''}
      </p>

      <div className="h-[1px] bg-gray-200"></div>
      {/* 현재 진행중인 멘토링 섹션 */}
      <CurrentMentoring item={mentoringlistdata.slice(0, 5)} />
      {/* 리뷰 섹션 */}
      {review && reviewAll && (
        <ReviewSection
          review={review}
          userUuid={userUuId}
          reviewAll={reviewAll}
        />
      )}
    </SeparateContainer.RightSide>
  );
}

export default page;

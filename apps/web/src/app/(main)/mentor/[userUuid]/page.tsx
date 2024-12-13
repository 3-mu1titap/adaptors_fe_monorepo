import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { GetMentorMentoringList } from 'src/actions/mentor/mentorAction';
import { getProfileImage } from 'src/actions/profile/getProfileData';

import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import { SeparateContainer } from '@repo/web/components/common/layout/SeperateContainer';
import { getMentorIntroduction } from 'src/actions/profile/getProfileData';
import CurrentMentoring from '@repo/web/components/pages/mentor/current/CurrentMentoring';
import ReviewSection from '@repo/web/components/pages/mentor/review/ReviewSection';
import { getMentorReview } from '@repo/web/actions/review/mentorReview';

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
  // const userIntroduction = await getMentorIntroduction(userUuId);

  //유저의 수강평 조회
  const review = await getMentorReview(userUuId);
  console.log(review, '조회 성공');

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
        ✨ 10년 이상의 웹개발 경력을 가진 풀스택 개발자이자, 새로운 길을 찾는
        개발자분들을 돕고 싶은 멘토입니다. 웹개발은 단순히 코드를 작성하는 일이
        아니라, 문제를 해결하고 창의력을 발휘해 사용자에게 가치를 제공하는
        일이에요! 하지만, 시작하는 단계에서는 복잡한 기술과 빠르게 변화하는
        트렌드에 압도될 수도 있죠. 걱정하지 마세요! 😊 제가 여러분의 가이드가
        되어 쉽고 명확하게 방향을 제시하겠습니다. 🧭
        {/* {userIntroduction.content} */}
      </p>

      <div className="h-[1px] bg-gray-200"></div>
      {/* 현재 진행중인 멘토링 섹션 */}
      <CurrentMentoring item={mentoringlistdata.slice(0, 5)} />
      {/* 리뷰 섹션 */}
      {review && <ReviewSection review={review} userUuid={userUuId} />}
    </SeparateContainer.RightSide>
  );
}

export default page;

import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import MentorDetail from '@repo/web/components/pages/mentor/MentorDetail';
import { GetMentorMentoringList } from 'src/actions/mentor/mentorAction';
import { getProfileIamge } from 'src/actions/profile/getProfileData';

import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import { SeparateContainer } from '@repo/web/components/common/layout/SeperateContainer';

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
  console.log(mentoringlistdata, 'mentorlistDat');

  //유저의 닉네임 프로필 조회
  const UserProfile = await getProfileIamge(userUuId);
  console.log(UserProfile, 'userProfile');

  return (
    <CommonLayout className="h-full container mx-auto max-w-[80rem]">
      <div className="flex flex-col md:maw-w-[53rem] sm:flex-col sm:max-w-[26rem] md:flex-col lg:flex-row lg:max-w-[80rem] mx-auto mt-32">
        <SeparateContainer.LeftSide className="flex flex-col md:max-w-[30rem] sm:max-w-[12rem] lg:maw-w-[20rem] mx-auto">
          <div className="mx-5">
            <CustomMentorProfilePhoto
              profileImgUrl={UserProfile.profileImageUrl}
            />
            <h1 className="text-xl font-bold my-3 md:text-wrap">
              {UserProfile.nickName}
            </h1>
            <div className="flex justify-between items-center w-full mb-3 gap-3">
              <CustomLikeButton count={200823} />
            </div>
            <CustomShareButton />
            <CustomNowDate />
          </div>
        </SeparateContainer.LeftSide>

        <SeparateContainer.RightSide className="flex flex-col md:max-w-[50rem] sm:max-w-[10rem] lg:max-w-[50rem] mx-auto justify-center">
          <CustomSessionInfoTags />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 pb-3 pt-5">
            <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight">
              안녕하세요! 👋 여러분의 웹개발 여정을 함께할
              <br />
              멘토 [{UserProfile.nickName}]입니다!
            </h2>
          </div>
          <p className="pb-10 text-md break-words">
            ✨ 10년 이상의 웹개발 경력을 가진 풀스택 개발자이자, 새로운 길을
            찾는 개발자분들을 돕고 싶은 멘토입니다. 웹개발은 단순히 코드를
            작성하는 일이 아니라, 문제를 해결하고 창의력을 발휘해 사용자에게
            가치를 제공하는 일이에요! 하지만, 시작하는 단계에서는 복잡한 기술과
            빠르게 변화하는 트렌드에 압도될 수도 있죠. 걱정하지 마세요! 😊 제가
            여러분의 가이드가 되어 쉽고 명확하게 방향을 제시하겠습니다. 🧭
          </p>

          <MentorDetail mentorlistItem={mentoringlistdata} />
        </SeparateContainer.RightSide>
      </div>
    </CommonLayout>
  );
}

export default page;

import React from 'react';
import { GetMentorMentoringList } from 'src/actions/mentor/mentorAction';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { getProfileIamge } from 'src/actions/profile/getProfileData';
import MentorDetailProfile from '@components/pages/mentor/MentorDetailProfile';
import MentorIntro from '@components/pages/mentor/MentorIntro';
import CurrentMentoring from '@components/pages/mentor/current/CurrentMentoring';
import MentorDetail from '@components/pages/mentor/MentorDetail';
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
  // console.log(UserProfile, 'userProfile');

  return (
    <CommonLayout className="h-full container mx-auto max-w-[80rem]">
      <div className="flex max-w-[80rem] mx-auto bg-gray-100 mt-28">
        {/* 왼쪽 사이드엔 멘토의 프로필 오른쪽엔 멘토의 소개,멘토링*/}
        <MentorDetailProfile MentorProfile={UserProfile} />
        <MentorDetail mentorlistItem={mentoringlistdata} />
      </div>
    </CommonLayout>
  );
}

export default page;

import React from 'react';
import MentorDetail from '@components/pages/mentor/MentorDetail';
import { GetMentorMentoringList } from 'src/actions/mentor/mentorAction';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { getProfileIamge } from 'src/actions/profile/getProfileData';

async function page({ params }: { params: { userUuid: string } }) {
  const userUuId = params?.userUuid;
  const isMentor = true;

  //멘토의 멘토링 리스트 조회
  const mentoringlistdata = await GetMentorMentoringList(userUuId, isMentor);
  console.log(mentoringlistdata, 'mentorlistData');

  //유저의 닉네임 프로필 조회
  const UserProfile = await getProfileIamge(userUuId);
  console.log(UserProfile, 'userProfile');

  return (
    <CommonLayout className="h-auto mt-32">
      <MentorDetail
        mentorlistItme={mentoringlistdata}
        userProfile={UserProfile}
      />
    </CommonLayout>
  );
}

export default page;

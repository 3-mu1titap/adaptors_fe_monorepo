import React from 'react';
import MentorDetail from '@components/pages/mentor/MentorDetail';
import { GetMentorMentoringList } from 'src/actions/mentor/mentorAction';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
async function page({ params }: { params: { userUuid: string } }) {
  const userUuId = params?.userUuid;
  const isMentor = true;
  const mentoringlistdata = await GetMentorMentoringList(userUuId, isMentor);
  console.log(mentoringlistdata, 'mentorlistData');

  return (
    <CommonLayout className="h-auto mt-32">
      <MentorDetail mentorlistItme={mentoringlistdata} />
    </CommonLayout>
  );
}

export default page;

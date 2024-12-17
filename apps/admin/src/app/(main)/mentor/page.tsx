import { Metadata } from 'next';

import {
  GetMentoringInfo,
  GetMentoringListByMentor,
  GetMentoringSessionList,
} from '@repo/admin/actions/mentoring/mentoringAction';

import { getMyProfileIamge } from '@repo/admin/actions/profile/getProfileData';
import HomeDashboard from '@repo/admin/components/pages/main/home/HomeDashboard';
import type { MentoringDataType } from '@repo/ui/types/CommonType.ts';
import { redirect } from 'next/navigation';
import { getChatProfile } from '@repo/admin/actions/chatting/chattingAction';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: `Home`,
};

const initialUserData = [
  {
    nickName: '389d459sssc8f21',
    menteeImageUrl:
      'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1732604491992-Mentee1.png',
  },
  {
    nickName: '389d45sd9c8f21',
    menteeImageUrl:
      'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1732604552880-mentee2.png',
  },
  {
    nickName: '389d459c8f21',
    menteeImageUrl:
      'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1732604576419-mentee3.png',
  },
  {
    nickName: '389d459dsc8f21',
    menteeImageUrl:
      'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734245095114-Frame.png',
  },
];

export default async function Page() {
  const session = await getServerSession();
  const mentoringListData = await GetMentoringListByMentor();
  if (mentoringListData.length === 0) return redirect('/mentor/mentoring');
  const mentoringSessionList = await GetMentoringSessionList(
    mentoringListData[0].mentoringUuid
  );
  const MentoringInfoData: MentoringDataType = await GetMentoringInfo(
    mentoringListData[0].mentoringUuid
  );
  const user = await getChatProfile(session?.user.uuid);
  return (
    <>
      {mentoringSessionList && MentoringInfoData && (
        <HomeDashboard
          initialUserData={initialUserData}
          mentoringSessionList={mentoringSessionList}
          MentoringInfoData={MentoringInfoData}
          mentoringUuid={mentoringListData[0].mentoringUuid}
          user={user}
        />
      )}
    </>
  );
}

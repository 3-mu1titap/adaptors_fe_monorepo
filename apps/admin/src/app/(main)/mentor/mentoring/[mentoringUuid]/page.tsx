import { getChatProfile } from '@repo/admin/actions/chatting/chattingAction';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '@repo/admin/actions/mentoring/mentoringAction';
import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import HomeDashboard from '@repo/admin/components/pages/main/home/HomeDashboard';
import { MentoringResult } from '@repo/ui/types/CommonType.js';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: `Mentoring Detail`,
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

export default async function Page({
  params,
}: {
  params: { mentoringUuid: string };
}) {
  const session = await getServerSession(options);
  const mentoringUuid = params.mentoringUuid;
  const mentoringSessionList: MentoringResult[] =
    await GetMentoringSessionList(mentoringUuid);
  const user = await getChatProfile({ userUuid: session?.user.uuid });
  const mentoringInfoData = await GetMentoringInfo(mentoringUuid);
  return (
    <>
      {mentoringSessionList && mentoringInfoData && (
        <HomeDashboard
          user={user}
          initialUserData={initialUserData}
          mentoringSessionList={mentoringSessionList}
          MentoringInfoData={mentoringInfoData}
          mentoringUuid={mentoringUuid}
        />
      )}
    </>
  );
}

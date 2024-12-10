import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '@repo/admin/actions/mentoring/mentoringAction';
import HomeDashboard from '@repo/admin/components/pages/main/home/HomeDashboard';
import { MentoringResult } from '@repo/ui/types/CommonType.js';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Mentoring Detail`,
};

const initialUserData = [
  {
    userUuid: '389d459sssc8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=14',
  },
  {
    userUuid: '389d45sd9c8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=23',
  },
  {
    userUuid: '389d459c8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=56',
  },
  {
    userUuid: '389d459dsc8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=78',
  },
];

export default async function Page({
  params,
}: {
  params: { mentoringUuid: string };
}) {
  const mentoringUuid = params.mentoringUuid;
  const mentoringSessionList: MentoringResult[] =
    await GetMentoringSessionList(mentoringUuid);

  const mentoringInfoData = await GetMentoringInfo(mentoringUuid);
  return (
    <>
      {mentoringSessionList && mentoringInfoData && (
        <HomeDashboard
          initialUserData={initialUserData}
          mentoringSessionList={mentoringSessionList}
          MentoringInfoData={mentoringInfoData}
        />
      )}
    </>
  );
}

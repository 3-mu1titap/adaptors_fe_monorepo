import { Metadata } from 'next';
import MentoringContent from '@repo/client/components/pages/main/mentor/mentoring/detail/MentoringContent';
import {
  GetMentoringInfo,
  GetMentoringListByMentor,
  GetMentoringSessionList,
} from '@repo/client/actions/mentoring/mentoringAction';
import { MentoringSessionDataType } from '@repo/client/components/types/main/mentor/mentoringTypes';
import MentoringDetailHeader from '@repo/client/components/header/MentoringDetailHeader';
import MentoringByMentor from '@repo/client/components/pages/main/home/MentoringByMentor';
import HomeDashboard from '@repo/client/components/pages/main/home/HomeDashboard';

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
  const mentoringSessionList: MentoringSessionDataType[] =
    await GetMentoringSessionList(mentoringUuid);

  const mentoringInfoData = await GetMentoringInfo(mentoringUuid);
  return (
    <HomeDashboard
      initialUserData={initialUserData}
      mentoringSessionList={mentoringSessionList}
      MentoringInfoData={mentoringInfoData}
    />
  );
}

import { Metadata } from 'next';
import ClientContainer from '@repo/admin/components/common/layouts/ClientContainer';

import {
  GetMentoringInfo,
  GetMentoringListByMentor,
  GetMentoringSessionList,
} from '@repo/admin/actions/mentoring/mentoringAction';

import type {
  MentoringResult,
  MentoringDataType,
} from '@repo/ui/types/CommonType.ts';
import HomeDashboard from '@repo/admin/components/pages/main/home/HomeDashboard';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: `Home`,
};

const initialUserData = [
  {
    nick: '389d459sssc8f21',
    userImageUrl: 'https://picsum.photos/200/200?random=14',
  },
  {
    nick: '389d45sd9c8f21',
    userImageUrl: 'https://picsum.photos/200/200?random=23',
  },
  {
    nick: '389d459c8f21',
    userImageUrl: 'https://picsum.photos/200/200?random=56',
  },
  {
    nick: '389d459dsc8f21',
    userImageUrl: 'https://picsum.photos/200/200?random=78',
  },
];

export default async function Page() {
  const mentoringListData = await GetMentoringListByMentor();
  if (mentoringListData.length === 0) return redirect('/mentor/mentoring');
  const mentoringSessionList = await GetMentoringSessionList(
    mentoringListData[0].mentoringUuid
  );
  const MentoringInfoData: MentoringDataType = await GetMentoringInfo(
    mentoringListData[0].mentoringUuid
  );
  return (
    <>
      {mentoringSessionList && MentoringInfoData && (
        <HomeDashboard
          initialUserData={initialUserData}
          mentoringSessionList={mentoringSessionList}
          MentoringInfoData={MentoringInfoData}
        />
      )}
    </>
  );
}

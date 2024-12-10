import { Metadata } from 'next';
import ClientContainer from '@repo/admin/components/common/layouts/ClientContainer';

import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '@repo/admin/actions/mentoring/mentoringAction';

import type {
  MentoringResult,
  MentoringDataType,
} from '@repo/ui/types/CommonType.ts';
import HomeDashboard from '@repo/admin/components/pages/main/home/HomeDashboard';

export const metadata: Metadata = {
  title: `Home`,
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

export default async function Page() {
  const mentoringSessionList = await GetMentoringSessionList(
    '8e68777e-47ae-46c6-a42b-389d459c8f21'
  );
  const MentoringInfoData: MentoringDataType = await GetMentoringInfo(
    '8e68777e-47ae-46c6-a42b-389d459c8f21'
  );
  return (
    <HomeDashboard
      initialUserData={initialUserData}
      mentoringSessionList={mentoringSessionList}
      MentoringInfoData={MentoringInfoData}
    />
  );
}

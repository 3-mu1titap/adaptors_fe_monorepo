import { Metadata } from 'next';
import MentoringContent from '@repo/client/components/pages/main/mentor/mentoring/detail/MentoringContent';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '@repo/client/actions/mentoring/mentoringAction';
import { MentoringSessionDataType } from '@repo/client/components/types/main/mentor/mentoringTypes';
import MentoringDetailHeader from '@repo/client/components/header/MentoringDetailHeader';

export const metadata: Metadata = {
  title: `Mentoring Detail`,
};

export default async function Page({
  params,
}: {
  params: { mentoringUuid: string };
}) {
  const mentoringUuid = params.mentoringUuid;
  const mentoringInfo = await GetMentoringInfo(mentoringUuid);
  const mentoringSessionData: MentoringSessionDataType[] =
    await GetMentoringSessionList(mentoringUuid);

  return (
    <div className="w-full mx-4 mt-2">
      <MentoringDetailHeader mentoringUuid={mentoringUuid} />
      <MentoringContent
        mentoringInfo={mentoringInfo}
        mentoringSessionData={mentoringSessionData}
      />
    </div>
  );
}

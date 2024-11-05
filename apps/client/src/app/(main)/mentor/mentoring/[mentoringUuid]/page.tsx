import { GetMentoringSessionList } from '../../../../../actions/mentoring/mentoringAction';
import { MentoringSessionDataType } from '../../../../../components/types/main/mentor/mentoringTypes';

export default async function Page({
  params,
}: {
  params: { mentoringUuid: string };
}) {
  const mentoringUuid = params.mentoringUuid;
  const mentoringSessionData: MentoringSessionDataType[] =
    await GetMentoringSessionList({
      mentoringUuid: mentoringUuid,
    });

  return <div className="w-full">{mentoringSessionData.length}</div>;
}

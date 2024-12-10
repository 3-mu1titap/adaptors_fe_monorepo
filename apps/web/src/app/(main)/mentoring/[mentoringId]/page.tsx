import MentoringDetail from '@repo/web/components/pages/main/mentoring/MentoringDetail';

import { MentoringResult } from '@repo/ui/types/CommonType.ts';
import { getProfileImage } from '@repo/web/actions/profile/getProfileData';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../actions/mentoring/mentoringAction';

async function fetchMentoringData(mentoringUuid: string) {
  const mentoringSessionList: MentoringResult[] =
    await GetMentoringSessionList(mentoringUuid);
  const MentoringInfoData = await GetMentoringInfo(mentoringUuid);
  const mentorData = await getProfileImage(
    MentoringInfoData?.mentorUuid ? MentoringInfoData.mentorUuid : ''
  );
  return { mentoringSessionList, MentoringInfoData, mentorData };
}
async function Page({
  searchParams,
  params,
}: {
  searchParams: { selectedDate: string };
  params: { mentoringId: string };
}) {
  const selectedDate = searchParams.selectedDate || '';
  const { mentoringSessionList, MentoringInfoData, mentorData } =
    await fetchMentoringData(params.mentoringId);

  return (
    <main className="pt-[7rem] py-2 px-8 min-h-screen bg-gray-50">
      {MentoringInfoData && mentoringSessionList && (
        <MentoringDetail
          mentoringDate={selectedDate}
          mentoringUuid={params.mentoringId}
          mentoringSessionList={mentoringSessionList}
          MentoringInfoData={MentoringInfoData}
          mentorData={mentorData}
        />
      )}
    </main>
  );
}

export default Page;

import MentoringDetail from '@components/pages/main/mentoring/MentoringDetail';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../actions/mentoring/mentoringAction';
import {
  MentoringDataType,
  MentoringResult,
} from '@components/types/mentoring/mentoringTypes';

async function fetchMentoringData(mentoringUuid: string) {
  const mentoringSessionList: MentoringResult[] =
    await GetMentoringSessionList(mentoringUuid);
  const MentoringInfoData: MentoringDataType | null =
    await GetMentoringInfo(mentoringUuid);
  return { mentoringSessionList, MentoringInfoData };
}

async function Page({
  searchParams,
  params,
}: {
  searchParams: { selectedDate: string };
  params: { mentoringId: string };
}) {
  const selectedDate = searchParams.selectedDate || '';
  const { mentoringSessionList, MentoringInfoData } = await fetchMentoringData(
    params.mentoringId
  );

  return (
    <main className="mt-14 py-2 px-4 min-h-screen bg-gray-50">
      <MentoringDetail
        mentoringDate={selectedDate}
        mentoringUuid={params.mentoringId}
        mentoringSessionList={mentoringSessionList}
        MentoringInfoData={MentoringInfoData}
      />
    </main>
  );
}

export default Page;

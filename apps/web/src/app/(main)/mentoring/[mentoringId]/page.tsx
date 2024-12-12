import MentoringDetail from '@repo/web/components/pages/main/mentoring/MentoringDetail';

import { MentoringResult } from '@repo/ui/types/CommonType.ts';
import { getProfileImage } from '@repo/web/actions/profile/getProfileData';
import {
  getBestRevieweList,
  getReviewerProfile,
} from '@repo/web/actions/review/mentoringReview';
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
  const ReviewerData = await getReviewerProfile(mentoringUuid);
  const BestRevieweList = await getBestRevieweList(mentoringUuid);
  return {
    mentoringSessionList,
    MentoringInfoData,
    mentorData,
    ReviewerData,
    BestRevieweList,
  };
}
async function Page({
  searchParams,
  params,
}: {
  searchParams: { selectedDate: string };
  params: { mentoringId: string };
}) {
  const selectedDate = searchParams.selectedDate || '';
  const {
    mentoringSessionList,
    MentoringInfoData,
    mentorData,
    ReviewerData,
    BestRevieweList,
  } = await fetchMentoringData(params.mentoringId);
  console.log('getBestRevieweList: ', BestRevieweList);
  return (
    <main className="pt-[7rem] py-2 px-4 sm:px-8 min-h-screen bg-gray-50">
      {MentoringInfoData && mentoringSessionList && (
        <MentoringDetail
          mentoringDate={selectedDate}
          mentoringUuid={params.mentoringId}
          mentoringSessionList={mentoringSessionList}
          MentoringInfoData={MentoringInfoData}
          mentorData={mentorData}
          ReviewerData={ReviewerData}
          BestRevieweList={BestRevieweList}
        />
      )}
    </main>
  );
}

export default Page;

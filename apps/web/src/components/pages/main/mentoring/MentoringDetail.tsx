import { CommonLayout } from '@components/common/commomLayout';
import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import CustomSessionList from '@repo/ui/components/ui/custom/CustomSessionList';
import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '../../../../actions/mentoring/mentoringAction';
import {
  MentoringDataType,
  MentoringResult,
} from '../../../types/mentoring/mentoringTypes';
import MentorSection from './MentorSection';
import MentoringOverview from './MentoringOverview';
import MentoringReviewSection from './review/MentoringReviewSection';
export default async function MentoringCalendar({
  mentoringDate,
  mentoringUuid,
}: {
  mentoringDate: string;
  mentoringUuid: string;
}) {
  const mentoringSessionList: MentoringResult[] | [] =
    await GetMentoringSessionList('8e68777e-47ae-46c6-a42b-389d459c8f21');
  const MentoringInfoData: MentoringDataType | null = await GetMentoringInfo(
    '8e68777e-47ae-46c6-a42b-389d459c8f21'
  );
  // const mentoringSessionList: MentoringResult[] | [] =
  //   await GetMentoringSessionList(mentoringUuid);
  // const MentoringInfoData: MentoringDataType | null =
  //   await GetMentoringInfo(mentoringUuid);

  return (
    <CommonLayout
      type="section"
      reative="container"
      className=" mx-auto flex gap-10 my-4 px-4 md:px-8 xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[90%] relative"
    >
      {/* Left Section */}
      <MentorSection
        mentorUuid={
          MentoringInfoData?.mentorUuid ? MentoringInfoData?.mentorUuid : ''
        }
        mentoringSessionList={mentoringSessionList}
      />
      {/* Ri Section */}
      <SeparateContainer.RightSide>
        {MentoringInfoData && (
          <MentoringOverview MentoringInfoData={MentoringInfoData} />
        )}
        <CustomSessionList
          filteredList={mentoringSessionList}
          mentoringName={MentoringInfoData}
        />
        <MentoringReviewSection />
      </SeparateContainer.RightSide>
    </CommonLayout>
  );
}

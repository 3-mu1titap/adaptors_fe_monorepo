import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import CustomSessionList from '@repo/ui/components/ui/custom/CustomSessionList';
import {
  MentoringDataType,
  MentoringResult,
} from '@repo/ui/types/CommonType.ts';
import { CommonLayout } from '@repo/web/components/common/commomLayout';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import MentoringOverview from './MentoringOverview';
import MentorSection from './MentorSection';
export default function MentoringCalendar({
  mentoringDate,
  mentoringUuid,
  mentoringSessionList,
  MentoringInfoData,
  mentorData,
}: {
  mentoringDate: string;
  mentoringUuid: string;
  mentoringSessionList: MentoringResult[];
  MentoringInfoData: MentoringDataType;
  mentorData: userProfileType;
}) {
  const userData = [
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

  const filteredList: MentoringResult[] = mentoringDate
    ? mentoringSessionList.filter((item) => item.startDate === mentoringDate)
    : mentoringSessionList;
  return (
    <CommonLayout
      type="section"
      reative="container"
      className=" mx-auto flex gap-10 my-4 px-4 md:px-8 xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[90%] relative"
    >
      {/* Left Section */}
      <MentorSection
        mentorUuid={MentoringInfoData?.mentorUuid || ''}
        mentoringSessionList={mentoringSessionList}
        userData={userData}
        mentorData={mentorData}
      />
      {/* Ri Section */}
      <SeparateContainer.RightSide>
        {MentoringInfoData && (
          <MentoringOverview
            MentoringInfoData={MentoringInfoData}
            userData={userData}
          />
        )}
        <CustomSessionList
          filteredList={filteredList}
          mentoringName={MentoringInfoData}
        />
      </SeparateContainer.RightSide>
    </CommonLayout>
  );
}

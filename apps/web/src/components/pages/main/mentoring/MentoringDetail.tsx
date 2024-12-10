import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import {
  MentoringDataType,
  MentoringResult,
} from '@repo/ui/types/CommonType.ts';
import { ReviewerProfileType } from '@repo/ui/types/ReviewType.js';
import { CommonLayout } from '@repo/web/components/common/commomLayout';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import MentoringOverview from './MentoringOverview';
import MentorSection from './MentorSection';
import SessionList from './SessionList';
export default function MentoringDetail({
  mentoringDate,
  mentoringUuid,
  mentoringSessionList,
  MentoringInfoData,
  mentorData,
  ReviewerData,
}: {
  mentoringDate: string;
  mentoringUuid: string;
  mentoringSessionList: MentoringResult[];
  MentoringInfoData: MentoringDataType;
  mentorData: userProfileType;
  ReviewerData: ReviewerProfileType[];
}) {
  const userData: ReviewerProfileType[] = [
    {
      nickname: '389d459sssc8f21',
      profileImageUrl: 'https://picsum.photos/200/200?random=14',
    },
    {
      nickname: '389d45sd9c8f21',
      profileImageUrl: 'https://picsum.photos/200/200?random=23',
    },
    {
      nickname: '389d459c8f21',
      profileImageUrl: 'https://picsum.photos/200/200?random=56',
    },
    {
      nickname: '389d459dsc8f21',
      profileImageUrl: 'https://picsum.photos/200/200?random=78',
    },
  ];
  console.log('MentoringDetail', mentorData);
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
        mentorData={mentorData}
        ReviewerData={
          ReviewerData[0]?.profileImageUrl ? ReviewerData : userData
        }
      />
      {/* Ri Section */}
      <SeparateContainer.RightSide>
        {MentoringInfoData && (
          <MentoringOverview
            MentoringInfoData={MentoringInfoData}
            userData={
              ReviewerData[0]?.profileImageUrl ? ReviewerData : userData
            }
          />
        )}
        <SessionList
          filteredList={filteredList}
          MentoringData={MentoringInfoData}
        />
      </SeparateContainer.RightSide>
    </CommonLayout>
  );
}

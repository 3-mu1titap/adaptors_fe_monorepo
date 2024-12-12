import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import {
  MentoringDataType,
  MentoringResult,
} from '@repo/ui/types/CommonType.ts';
import { Review, ReviewerProfileType } from '@repo/ui/types/ReviewType.js';
import { CommonLayout } from '@repo/web/components/common/commomLayout';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import MentoringContents from './MentoringContents';
import MentoringOverview from './MentoringOverview';
import MentorSection from './MentorSection';
import MentoringReviewSection from './review/MentoringReviewSection';
import SessionList from './SessionList';
export default function MentoringDetail({
  mentoringDate,
  mentoringUuid,
  mentoringSessionList,
  MentoringInfoData,
  mentorData,
  ReviewerData,
  BestRevieweList,
  isCheck,
}: {
  mentoringDate: string;
  mentoringUuid: string;
  mentoringSessionList: MentoringResult[];
  MentoringInfoData: MentoringDataType;
  mentorData: userProfileType;
  ReviewerData: ReviewerProfileType[];
  BestRevieweList: Review[];
  isCheck: boolean;
}) {
  const userData: ReviewerProfileType[] = [
    {
      nickname: '389d459sssc8f21',
      userImageUrl: 'https://picsum.photos/200/200?random=14',
    },
    {
      nickname: '389d45sd9c8f21',
      userImageUrl: 'https://picsum.photos/200/200?random=23',
    },
    {
      nickname: '389d459c8f21',
      userImageUrl: 'https://picsum.photos/200/200?random=56',
    },
    {
      nickname: '389d459dsc8f21',
      userImageUrl: 'https://picsum.photos/200/200?random=78',
    },
  ];
  const filteredList: MentoringResult[] = mentoringDate
    ? mentoringSessionList.filter((item) => item.startDate === mentoringDate)
    : mentoringSessionList;
  return (
    <CommonLayout
      type="section"
      reative="container"
      className=" mx-auto sm:flex gap-10 my-4 px-1 sm:px-4 md:px-8 xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[90%] relative"
    >
      {/* Left Section */}
      <MentorSection
        isCheck={isCheck}
        MentoringInfoData={MentoringInfoData}
        mentoringSessionList={mentoringSessionList}
        mentorData={mentorData}
        ReviewerData={ReviewerData[0]?.userImageUrl ? ReviewerData : userData}
      />
      {/* Ri Section */}
      <SeparateContainer.RightSide>
        {MentoringInfoData && (
          <MentoringOverview
            MentoringInfoData={MentoringInfoData}
            userData={ReviewerData[0]?.userImageUrl ? ReviewerData : userData}
          />
        )}
        <MentoringContents content={MentoringInfoData.detail} />
        <SessionList
          filteredList={filteredList}
          MentoringData={MentoringInfoData}
        />

        <MentoringReviewSection reviewList={BestRevieweList} />
      </SeparateContainer.RightSide>
    </CommonLayout>
  );
}

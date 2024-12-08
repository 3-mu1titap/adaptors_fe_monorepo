import { MentoringResult } from '@components/types/mentoring/mentoringTypes';
import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import { SeparateContainer } from '@repo/ui/components/ui/custom/CustomSeparateContainer';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import { SessionUser } from '@repo/ui/types/CommonType.js';
import Calendar from './Calendar';
export default function MentorSection({
  mentorUuid,
  mentoringSessionList,
  userData,
}: {
  mentorUuid: string;
  mentoringSessionList: MentoringResult[] | [];
  userData: SessionUser[];
}) {
  return (
    <>
      <SeparateContainer.LeftSide>
        <CustomMentorProfilePhoto profileImgUrl="https://i.pinimg.com/736x/6d/98/bd/6d98bd0a456e85177d8fbd65a54be284.jpg" />
        <h1 className="text-xl font-bold my-3">@ Mentor</h1>
        <div className="flex justify-between items-center w-full mb-3 gap-3">
          <CustomReviewerItem
            initialUserData={userData}
            userCount={10}
            reviewCount={293938}
          />
          <CustomLikeButton count={200823} />
        </div>
        <CustomShareButton />
        <CustomNowDate />
        <Calendar mentoringSessionList={mentoringSessionList} />
      </SeparateContainer.LeftSide>
    </>
  );
}

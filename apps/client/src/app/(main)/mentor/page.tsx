import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomSessionList from '@repo/ui/components/ui/custom/CustomSessionList';
import { Metadata } from 'next';
import ClientContainer from '@repo/client/components/common/layouts/ClientContainer';
import { SeparateContainer } from '@repo/client/components/common/layouts/SeperateContainer';

import {
  GetMentoringInfo,
  GetMentoringSessionList,
} from '@repo/client/actions/mentoring/mentoringAction';
import {
  MentoringResult,
  MentoringDataType,
} from '@repo/ui/types/CommonType.ts';

export const metadata: Metadata = {
  title: `Home`,
};

const initialUserData = [
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

export default async function Page() {
  const mentoringSessionList: MentoringResult[] | [] =
    await GetMentoringSessionList('8e68777e-47ae-46c6-a42b-389d459c8f21');
  const MentoringInfoData: MentoringDataType = await GetMentoringInfo(
    '8e68777e-47ae-46c6-a42b-389d459c8f21'
  );
  return (
    <section className="w-full px-10 py-5 mt-[6rem]">
      <ClientContainer>
        <SeparateContainer.LeftSide>
          <CustomMentorProfilePhoto profileImgUrl="https://i.pinimg.com/736x/6d/98/bd/6d98bd0a456e85177d8fbd65a54be284.jpg" />
          <h1 className="text-xl font-bold my-3">@ Mentor</h1>
          <div className="flex justify-between items-center w-full mb-3 gap-3">
            <CustomReviewerItem
              initialUserData={initialUserData}
              userCount={10}
              reviewCount={293938}
            />
            <CustomLikeButton count={200823} />
          </div>
          <CustomShareButton />
          <CustomNowDate />
        </SeparateContainer.LeftSide>
        <SeparateContainer.RightSide>
          <CustomSessionInfoTags />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 pb-3 pt-5">
            <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight">
              안녕하세요! 👋 여러분의 웹개발 여정을 함께할
              <br />
              멘토 [멘토 이름]입니다!
            </h2>
            <CustomReviewerItem
              initialUserData={initialUserData}
              className="hidden lg:!flex"
              userCount={30}
              reviewCount={293938}
            />
          </div>
          <p className="pb-10 text-md break-words">
            ✨ 10년 이상의 웹개발 경력을 가진 풀스택 개발자이자, 새로운 길을
            찾는 개발자분들을 돕고 싶은 멘토입니다. 웹개발은 단순히 코드를
            작성하는 일이 아니라, 문제를 해결하고 창의력을 발휘해 사용자에게
            가치를 제공하는 일이에요! 하지만, 시작하는 단계에서는 복잡한 기술과
            빠르게 변화하는 트렌드에 압도될 수도 있죠. 걱정하지 마세요! 😊 제가
            여러분의 가이드가 되어 쉽고 명확하게 방향을 제시하겠습니다. 🧭
          </p>
          <CustomSessionList
            filteredList={mentoringSessionList}
            mentoringName={MentoringInfoData}
          />
        </SeparateContainer.RightSide>
      </ClientContainer>
    </section>
  );
}

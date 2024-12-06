import CustomLikeButton from '@repo/ui/components/ui/custom/CustomLikeButton';
import CustomMentorProfilePhoto from '@repo/ui/components/ui/custom/CustomMentorProfilePhoto';
import CustomNowDate from '@repo/ui/components/ui/custom/CustomNowDate';
import CustomReviewerItem from '@repo/ui/components/ui/custom/CustomReviewerItem';
import CustomSessionInfoTags from '@repo/ui/components/ui/custom/CustomSessionInfoTags';
import CustomShareButton from '@repo/ui/components/ui/custom/CustomShareButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Home`,
};

const initialUserData = [
  {
    id: 1,
    name: 'Jason',
    profileImgUrl: 'https://picsum.photos/200/200?random=14',
  },
  {
    id: 2,
    name: 'Multi',
    profileImgUrl: 'https://picsum.photos/200/200?random=23',
  },
  {
    id: 3,
    name: 'Sara',
    profileImgUrl: 'https://picsum.photos/200/200?random=56',
  },
  {
    id: 4,
    name: 'Jenny',
    profileImgUrl: 'https://picsum.photos/200/200?random=78',
  },
];

export default async function Page() {
  return (
    <section className="w-full px-10 py-5 mt-[5rem]">
      <div
        className="flex flex-col lg:flex-row items-start justify-start gap-5"
        style={{ gridTemplateColumns: '1fr 3fr' }}
      >
        <div className="w-full lg:w-1/3 xl:w-1/4 flex-col justify-start items-start">
          <CustomMentorProfilePhoto profileImgUrl="https://i.pinimg.com/736x/6d/98/bd/6d98bd0a456e85177d8fbd65a54be284.jpg" />
          <h1 className="text-xl font-bold my-3">@ Mentor</h1>
          <div className="flex justify-between items-center w-full mb-3 gap-3">
            <CustomReviewerItem initialUserData={initialUserData} />
            <CustomLikeButton count={200823} />
          </div>
          <CustomShareButton />
          <CustomNowDate />
        </div>
        <div className="w-full lg:w-2/3 xl:w-3/4 space-y-2">
          <CustomSessionInfoTags />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start ">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              웹개발자로 살아남기위한 최고의 솔루션 제공합니다.
            </h2>
            <CustomReviewerItem
              initialUserData={initialUserData}
              className="hidden lg:!flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import MainIntro from '@components/pages/main/home/MainIntro/MainIntro';
import MainSearchTag from '@components/pages/main/home/MainSearchTag/MainSearchTag';
import PopularMentoringList from '@components/pages/main/home/MainSearchTag/PopularMentoringList';
import RecommendMentoring from '@components/pages/main/home/RecommendMentoring';
import ShareMentoring from '@components/pages/main/home/ShareMentoring';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';

function Page() {
  return (
    <CommonLayout className="mt-[7rem]">
      <MainSearchTag />
      <MainIntro />
      <PopularMentoringList />
      <RecommendMentoring />
      <ShareMentoring />
    </CommonLayout>
  );
}

export default Page;

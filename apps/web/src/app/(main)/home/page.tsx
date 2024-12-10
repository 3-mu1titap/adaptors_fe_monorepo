import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import MainIntro from '@repo/web/components/pages/main/home/MainIntro/MainIntro';
import MainSearchTag from '@repo/web/components/pages/main/home/MainSearchTag/MainSearchTag';
import PopularMentoringList from '@repo/web/components/pages/main/home/MainSearchTag/PopularMentoringList';
import RecommendMentoring from '@repo/web/components/pages/main/home/RecommendMentoring';
import ShareMentoring from '@repo/web/components/pages/main/home/ShareMentoring';

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

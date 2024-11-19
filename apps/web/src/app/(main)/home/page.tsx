import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import MainIntro from '@components/pages/main/home/MainIntro/MainIntro';
import MainSearchTag from '@components/pages/main/home/MainSearchTag/MainSearchTag';
import PopularMentoring from '@components/pages/main/home/PopularMentoring';
import RecommendMentoring from '@components/pages/main/home/RecommendMentoring';
import ShareMentoring from '@components/pages/main/home/ShareMentoring';

function Page() {
  return (
    <CommonLayout>
      <MainIntro />
      <MainSearchTag />
      <PopularMentoring />
      <RecommendMentoring />
      <ShareMentoring />
    </CommonLayout>
  );
}

export default Page;

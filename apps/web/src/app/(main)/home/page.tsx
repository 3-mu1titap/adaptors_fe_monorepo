import MainIntro from '../../../components/pages/main/home/MainIntro';
import PopularMentoring from '../../../components/pages/main/home/PopularMentoring';
import RecommendMentoring from '../../../components/pages/main/home/RecommendMentoring';
import ShareMentoring from '../../../components/pages/main/home/ShareMentoring';

function Page() {
  return (
    <main>
      <MainIntro />
      <PopularMentoring />
      <RecommendMentoring />
      <ShareMentoring />
    </main>
  );
}

export default Page;

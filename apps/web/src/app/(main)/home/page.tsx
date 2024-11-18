import PopularMentoring from '../../../components/pages/main/home/PopularMentoring';
import RecommendMentoring from '../../../components/pages/main/home/RecommendMentoring';
import ShareMentoring from '../../../components/pages/main/home/ShareMentoring';
import MainSearchTag from '../../../components/pages/main/home/MainSearchTag/MainSearchTag';
import MainIntro from '../../../components/pages/main/home/MainIntro/MainIntro';
function Page() {
  return (
    <main>
      <MainIntro />
      <MainSearchTag />
      <PopularMentoring />
      <RecommendMentoring />
      <ShareMentoring />
    </main>
  );
}

export default Page;

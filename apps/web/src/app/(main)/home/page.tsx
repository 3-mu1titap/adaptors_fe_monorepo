import MainIntro from '@components/pages/main/home/MainIntro/MainIntro';
import MainSearchTag from '@components/pages/main/home/MainSearchTag/MainSearchTag';
import PopularMentoringList from '@components/pages/main/home/MainSearchTag/PopularMentoringList';
import RecommendMentoring from '@components/pages/main/home/BestMentorList';
import ShareMentoring from '@components/pages/main/home/ShareMentoring';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { GetBestMentorList } from 'src/actions/mentor/mentorAction';
async function Page() {
  const res = await GetBestMentorList();
  console.log(res, '베트스 멘토 결과');
  return (
    <CommonLayout className="mt-[7rem]">
      <MainSearchTag />
      <MainIntro />
      <PopularMentoringList />
      <RecommendMentoring item={res} />
      <ShareMentoring />
    </CommonLayout>
  );
}

export default Page;

import MainIntro from '@components/pages/main/home/MainIntro/MainIntro';
import MainSearchTag from '@components/pages/main/home/MainSearchTag/MainSearchTag';
import PopularMentoringList from '@components/pages/main/home/MainSearchTag/PopularMentoringList';
import RecommendMentoring from '@components/pages/main/home/BestMentorList';
import ShareMentoring from '@components/pages/main/home/ShareMentoring';
import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { GetBestMentorList } from 'src/actions/mentor/mentorAction';
import { getTopCategoryList } from 'src/actions/category/getCategory';
async function Page() {
  //베스트 멘토 불러오기
  const res = await GetBestMentorList();
  // console.log(res, '베트스 멘토 결과');

  //대카테고리 불러오기
  const category_res = await getTopCategoryList();
  console.log(category_res, '대카테고리 불러오기');
  return (
    <CommonLayout className="mt-[7rem]">
      <MainSearchTag />
      <MainIntro />
      <PopularMentoringList categoryList={category_res} />
      <RecommendMentoring item={res} />
      <ShareMentoring />
    </CommonLayout>
  );
}

export default Page;

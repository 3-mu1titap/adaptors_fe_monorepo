import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { getTopCategoryList } from '@repo/web/actions/category/getCategory';
import { GetBestMentorList } from '@repo/web/actions/mentor/mentorAction';
import MainIntro from '@repo/web/components/pages/main/home/MainIntro/MainIntro';
import MainSearchTag from '@repo/web/components/pages/main/home/MainSearchTag/MainSearchTag';
import PopularMentoringList from '@repo/web/components/pages/main/home/popularMentoring/PopularMentoringList';
import ShareMentoring from '@repo/web/components/pages/main/home/ShareMentoring';
import BestMentoringList from '@repo/web/components/pages/main/home/bestMentor/BestMentorList';
async function Page() {
  //베스트 멘토 조회
  const res = await GetBestMentorList();
  // console.log(res, '베트스 멘토 결과');

  //대카테고리 조회
  const category_res = await getTopCategoryList();
  // console.log(category_res, '대카테고리 불러오기');

  return (
    <CommonLayout className="mt-[7rem]">
      <MainSearchTag />
      <MainIntro />
      <PopularMentoringList categoryData={category_res} />
      <BestMentoringList item={res} />
      <ShareMentoring />
    </CommonLayout>
  );
}

export default Page;

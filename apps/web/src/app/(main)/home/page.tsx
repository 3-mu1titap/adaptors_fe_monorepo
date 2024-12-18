import { CommonLayout } from '@repo/ui/components/ui/commomLayout';
import { getTopCategoryList } from '@repo/web/actions/category/getCategory';
import { GetBestMentorList } from '@repo/web/actions/mentor/mentorAction';
import { getMainMentoringList } from '@repo/web/actions/mentoring/mentoringAction';
import BestMentoringList from '@repo/web/components/pages/main/home/bestMentor/BestMentorList';
import MainIntro from '@repo/web/components/pages/main/home/MainIntro/MainIntro';
import MainSearchTag from '@repo/web/components/pages/main/home/MainSearchTag/MainSearchTag';
import PopularMentoringList from '@repo/web/components/pages/main/home/popularMentoring/PopularMentoringList';
import ShareMentoring from '@repo/web/components/pages/main/home/ShareMentoring';
import { mainIntroDatas } from '@repo/web/store/dummyStore';
async function Page() {
  //베스트 멘토 조회
  const res = await GetBestMentorList();
  //대카테고리 조회
  const category_res = await getTopCategoryList();
  //메인 멘토링 리스트 조회
  const main_List = await getMainMentoringList();
  return (
    <>
      <CommonLayout className="mt-[5rem] md:mt-[7rem]">
        <MainSearchTag />
        {main_List && <MainIntro mainIntroDatas={mainIntroDatas} />}
        {category_res && <PopularMentoringList categoryData={category_res} />}
        {res && <BestMentoringList item={res} />}
        <ShareMentoring />
      </CommonLayout>
    </>
  );
}

export default Page;

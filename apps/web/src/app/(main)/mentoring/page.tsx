import { CustomPagination } from '@repo/ui/components/ui/custom/index';
import { getTopCategoryList } from '@repo/web/actions/category/getCategory';
import { GetMentoringByCategory } from '@repo/web/actions/mentoring/getMentoringList';
import { GetMentoringNameSearch } from '@repo/web/actions/mentoring/mentoringAction';
import MainSearchTag from '@repo/web/components/pages/main/home/MainSearchTag/MainSearchTag';
import CategoriesSection from '@repo/web/components/pages/main/mentoring/category/CategoriesSection';
import ListSection from '@repo/web/components/pages/main/mentoring/ListSection';
import { MessageCircleQuestion } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function page({
  searchParams,
}: {
  searchParams: {
    category: string;
    page: string;
    name: string;
    isDirect: boolean;
  };
}) {
  const name = searchParams.name ? decodeURIComponent(searchParams.name) : '';
  const categories = await getTopCategoryList();
  if (!name) {
    if (!searchParams.category) {
      redirect(`/mentoring?category=${categories[0]?.topCategoryCode}&page=1`);
    } else if (!searchParams.page) {
      redirect(`/mentoring?category=${searchParams.category}&page=1`);
    } else if (!searchParams.category && !searchParams.page) {
      redirect(`/mentoring?category=${categories[0]?.topCategoryCode}&page=1`);
    }
  }
  const data = await GetMentoringNameSearch(
    name,
    searchParams.page,
    searchParams.isDirect
  );
  const mentoringListData = !name
    ? await GetMentoringByCategory({
        topCategoryCode: searchParams.category,
        size: '20',
        page: searchParams.page,
      })
    : data?.searchResults;

  return (
    <main className="mt-[9.5rem] pb-3 px-10 md:px-3  xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] max-w-[90%] container mx-auto">
      <MainSearchTag name={name} />
      {data?.spellingCorrection && (
        <div className="flex flex-row items-center mb-4 rounded-xl bg-slate-100 py-3 mt-4 tracking-wider lg:mx-10 lg:w-full">
          <span className="text-sm text-gray-400 font-bold flex items-center gap-2 ml-4 cursor-default lg:text-md lg:flex-nowrap lg:text-center">
            <span className="text-lg text-black">제안</span>
            <MessageCircleQuestion className="w-[22px] h-[22px]" />
            <span className="text-slate-700 text-xl">
              {data?.spellingCorrection}
            </span>
            (으)로 검색한 결과입니다.
          </span>
        </div>
      )}
      <CategoriesSection
        categoryParam={searchParams.category}
        categories={categories}
        text="멘토링 카테고리"
      />
      {(searchParams.category || searchParams.name) && (
        <ListSection mentoringListData={mentoringListData?.content} />
      )}
      <CustomPagination
        currentPage={searchParams?.page ? parseInt(searchParams?.page) : 1}
        totalPages={
          mentoringListData?.totalPages ? mentoringListData?.totalPages : 1
        }
        categoryCode={searchParams.category}
      />
    </main>
  );
}

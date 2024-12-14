import { CustomPagination } from '@repo/ui/components/ui/custom/index';
import { getTopCategoryList } from '@repo/web/actions/category/getCategory';
import { GetMentoringByCategory } from '@repo/web/actions/mentoring/getMentoringList';
import CategoriesSection from '@repo/web/components/pages/main/mentoring/category/CategoriesSection';
import ListSection from '@repo/web/components/pages/main/mentoring/ListSection';
import { redirect } from 'next/navigation';

export default async function page({
  searchParams,
}: {
  searchParams: { category: string; page: string };
}) {
  const categories = await getTopCategoryList();
  if (!searchParams.category) {
    redirect(`/mentoring?category=${categories[0]?.topCategoryCode}&page=1`);
  } else if (!searchParams.page) {
    redirect(`/mentoring?category=${searchParams.category}&page=1`);
  } else if (!searchParams.category && !searchParams.page) {
    redirect(`/mentoring?category=${categories[0]?.topCategoryCode}&page=1`);
  }

  const mentoringListData = await GetMentoringByCategory({
    topCategoryCode: searchParams.category,
    size: '20',
    page: searchParams.page,
  });
  return (
    <main className="mt-[9.5rem] pb-3 px-10 md:px-3  xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] max-w-[90%] container mx-auto">
      <CategoriesSection
        categoryParam={searchParams.category}
        categories={categories}
        text="멘토링 카테고리"
      />
      {searchParams.category && (
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

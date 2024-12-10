import { GetMentoringByCategory } from '@repo/web/actions/mentoring/getMentoringList';
import CategoryAside from '@repo/web/components/pages/main/mentoring/category/CategoryAside';
import ListSection from '@repo/web/components/pages/main/mentoring/ListSection';
import { redirect } from 'next/navigation';
import { getTopCategoryList } from 'src/actions/category/getCategory';

export default async function page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const categorise = await getTopCategoryList();
  const mentoringListData = await GetMentoringByCategory({
    topCategoryCode: searchParams.category,
  });
  if (!searchParams.category) {
    redirect(`/mentoring?category=${categorise[0]?.topCategoryCode}`);
  }
  return (
    <main className="mt-[7rem] px-8">
      {/* <PaperStock /> */}
      <CategoryAside
        categoryParam={searchParams.category}
        categorise={categorise}
      />
      {searchParams.category && (
        <ListSection mentoringListData={mentoringListData} />
      )}
    </main>
  );
}

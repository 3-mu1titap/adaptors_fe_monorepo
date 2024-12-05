import CategoryAside from '@components/pages/main/mentoring/category/CategoryAside';
import MentoringItem from '@components/pages/main/mentoring/MentoringItem';
import { redirect } from 'next/navigation';
import { getTopCategoryList } from 'src/actions/category/getCategory';
import { GetMentoringByCategory } from 'src/actions/mentoring/getMentoringList';
// import CategoryAside from "@components/pages/main/mentoring/category/CategoryAside"
export default async function page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const data = await GetMentoringByCategory({
    topCategoryCode: searchParams.category,
  });
  const categorise = await getTopCategoryList();
  if (!searchParams.category) {
    redirect(`/mentoring?category=${categorise[0].topCategoryCode}`);
  }
  console.log(categorise);
  return (
    <main className="mt-[7rem] flex">
      <CategoryAside categoryParam={searchParams.category} />
      <section className="lg:pr-32 grid grid-cols-4 gap-10">
        {data.map((mentoring) => (
          <MentoringItem item={mentoring} key={mentoring.mentoringUuid} />
        ))}
      </section>
    </main>
  );
}

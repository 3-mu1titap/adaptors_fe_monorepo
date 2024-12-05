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
    <main className="mt-[7rem] lg:flex relative lg:mx-4">
      {/* <PaperStock /> */}
      <CategoryAside categoryParam={searchParams.category} />
      {data && data.length > 0 ? (
        <section className="mx-auto mobile:w-full mobile:px-10 md:px-16 lg:px-36 grid mobile:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10">
          {data.map((mentoring) => (
            <MentoringItem item={mentoring} key={mentoring.mentoringUuid} />
          ))}
        </section>
      ) : (
        <div
          className="min-w-64 min-h-svh mx-auto text-center"
          style={{ height: `calc(100% - 456.51px)` }}
        >
          {/* <FitImage
            src="https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1733400950295-image-removebg-preview.png"
            alt="볼팡이"
            className="w-40 h-40 "
          /> */}
          <h1>데이터가 없습니다.</h1>
        </div>
      )}
    </main>
  );
}

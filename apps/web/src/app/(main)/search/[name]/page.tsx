import SearchMentoring from '@repo/web/components/pages/search/SearchMentoring';
import SearchResult from '@repo/web/components/pages/search/SearchResult';
import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
async function page({ params }: { params: { name: string } }) {
  const name = decodeURIComponent(params.name);
  console.log(name, 'searchName test test');

  const searchMentoringlistData = await GetMentoringNameSearch(name, 0);
  // console.log(searchMentoringlistData, 'search data data data data');
  return (
    <section className="container mx-auto max-w-[64rem] mt-32">
      <div className="mx-auto lg:max-w-[64rem] md:max-w-[48rem] sm-max-w-[23rem]">
        <SearchMentoring
          totalpage={searchMentoringlistData?.totalPages || 0}
          content={searchMentoringlistData?.content || []}
          pageable={
            searchMentoringlistData?.pageable || { pageNumber: 0, pageSize: 20 }
          }
          name={name}
        />
      </div>
    </section>
  );
}

export default page;

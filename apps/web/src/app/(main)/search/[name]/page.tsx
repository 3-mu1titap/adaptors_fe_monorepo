import SearchMentoring from '@repo/web/components/pages/search/SearchMentoring';
import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
import MainSearchTag from '@repo/web/components/pages/main/home/MainSearchTag/MainSearchTag';
async function page({ params }: { params: { name: string } }) {
  const name = decodeURIComponent(params.name);

  const searchMentoringlistData = await GetMentoringNameSearch(name, 0);
  // console.log(
  //   searchMentoringlistData?.searchResults,
  //   'search data data data data'
  // );
  return (
    <>
      <section className="container mx-auto max-w-[64rem] mt-32">
        <div className="mx-auto lg:max-w-[64rem] md:max-w-[48rem] max-w-[300px] sm-max-w-[23rem]">
          <MainSearchTag />
          {searchMentoringlistData && (
            <SearchMentoring
              spellingCorrection={searchMentoringlistData.spellingCorrection}
              SearchResults={searchMentoringlistData.searchResults}
              name={name}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default page;

import MainSearchTag from '@repo/web/components/pages/main/home/MainSearchTag/MainSearchTag';
import SearchMentoring from '@repo/web/components/pages/search/SearchMentoring';
import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
async function page({
  params,
  searchParams,
}: {
  params: {
    name: string;
  };
  searchParams: {
    isAutocomplete: boolean;
  };
}) {
  const name = decodeURIComponent(params.name);
  // console.log(name, 'fffffffffffffffffffffffff');
  const isDirect = searchParams.isAutocomplete;
  // console.log(isDirect, 'true? false?');

  const searchMentoringlistData = await GetMentoringNameSearch(
    name,
    0,
    isDirect
  );

  console.log(searchMentoringlistData, 'fffffffffff');
  return (
    <>
      <section className="container mx-auto max-w-[64rem] mt-32">
        <div className="mx-auto lg:max-w-[64rem] md:max-w-[48rem] max-w-[300px] sm-max-w-[23rem]">
          <MainSearchTag />
          {searchMentoringlistData && (
            <SearchMentoring
              isDirect={isDirect}
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

// import SearchInput from '@repo/web/components/pages/main/home/MainSearchTag/SearchInput';
// import SearchMentoring from '@repo/web/components/pages/search/SearchMentoring';
// import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
// async function page({
//   params,
//   searchParams,
// }: {
//   params: {
//     name: string;
//   };
//   searchParams: {
//     isAutocomplete: boolean;
//   };
// }) {
//   const name = decodeURIComponent(params.name);
//   const isDirect = searchParams.isAutocomplete;

//   const searchMentoringlistData = await GetMentoringNameSearch(
//     name,
//     0,
//     isDirect
//   );

//   return (
//     <>
//       <section className="container mx-auto max-w-[64rem] mt-32">
//         <div className="mx-auto lg:max-w-[64rem] md:max-w-[48rem] max-w-[300px] sm-max-w-[23rem]">
//           <SearchInput name={name} />
//           {searchMentoringlistData && (
//             <SearchMentoring
//               isDirect={isDirect}
//               spellingCorrection={searchMentoringlistData.spellingCorrection}
//               SearchResults={searchMentoringlistData.searchResults}
//               name={name}
//             />
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default page;

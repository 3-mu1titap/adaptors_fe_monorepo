import React from 'react';

import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
import SearchResult from '@components/pages/search/SearchResult';
import SearchMentoring from '@components/pages/search/SearchMentoring';
async function page({ params }: { params: { name: string } }) {
  const name = decodeURIComponent(params.name);
  console.log(name, 'searchName test test');

  const searchMentoringlistData = await GetMentoringNameSearch(name, 0);
  // console.log(searchMentoringlistData, 'search data data data data');
  return (
    <div className="container mx-auto max-w-[80rem] mt-32">
      <SearchResult searchResultName={name} />
      <SearchMentoring
        content={searchMentoringlistData?.content || []}
        pageable={
          searchMentoringlistData?.pageable || { pageNumber: 0, pageSize: 20 }
        }
        name={name}
      />
    </div>
  );
}

export default page;

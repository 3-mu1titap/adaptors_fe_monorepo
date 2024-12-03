import React from 'react';

function SearchResult({ searchResultName }: { searchResultName: string }) {
  return (
    <div>
      <span className="text-4xl text-black w-full h-full">
        {' '}
        검색 결과 : {searchResultName}
      </span>
    </div>
  );
}

export default SearchResult;

'use client';

import {
  pageableType,
  SearchMentoringListType,
} from '@repo/ui/types/CommonType.ts';
import { useEffect, useState } from 'react';
import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
import SearhMentoringCard from './SearhMentoringCard';
function SearchMentoring({
  totalpage,
  content,
  pageable,
  name,
}: {
  totalpage: number;
  content: SearchMentoringListType[];
  pageable: pageableType;
  name: string;
}) {
  const [Content, setContent] = useState<SearchMentoringListType[]>(content);
  const [page, setPage] = useState(pageable.pageNumber);
  const [totalPage, settotalPage] = useState(totalpage);

  const fetchMentoringData = async (page: number) => {
    try {
      const res = await GetMentoringNameSearch(name, page);
      setContent(res?.content || []);
    } catch (error) {
      console.error('Error fetching mentoring data:', error);
    }
  };
  useEffect(() => {
    fetchMentoringData(page); // 페이지 변경 감지
  }, [page, name]);
  return (
    <>
      {Content && pageable && Content.length > 0 ? (
        <ul className="mt-10 grid gap-y-20 gap-x-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Content.map((item, index) => (
            <SearhMentoringCard item={item} key={index} />
          ))}
        </ul>
      ) : (
        <div className="mt-10">
          <span className="text-gray-200 text-4xl">검색된 결과가 없습니다</span>
        </div>
      )}

      {/* 페이징 버튼 */}
      <div className="py-16 flex justify-center space-x-4 items-center rounded-lg">
        <button
          disabled={page <= 0}
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className="text-xl px-3 py-1 bg-white text-gray-300 border-2 border-gray-100 rounded-lg"
        >
          {'<'}
        </button>

        <div className="flex gap-x-2">
          {Array.from({ length: totalpage }).map((_, index) => (
            <button
              onClick={() => setPage(index)} // 페이지 상태 변경
              key={index}
              className={`px-3 py-1 border-2 border-gray-100 rounded-lg ${
                page === index
                  ? 'bg-green-500 text-white'
                  : 'bg-green-200 text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          disabled={page >= totalPage - 1}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPage - 1))}
          className="px-3 py-1 text-xl bg-white text-gray-300 border-2 border-gray-100 rounded-lg"
        >
          {'>'}
        </button>
      </div>
    </>
  );
}

export default SearchMentoring;

'use client';

import {
  pageableType,
  SearchMentoringListType,
} from '@repo/ui/types/CommonType.ts';
import { useEffect, useState } from 'react';
import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
import SearhMentoringCard from './SearhMentoringCard';
function SearchMentoring({
  content,
  pageable,
  name,
  totalPages,
}: {
  content: SearchMentoringListType[];
  pageable: pageableType;
  name: string;
  totalPages: any;
}) {
  const [Content, setContent] = useState<SearchMentoringListType[]>(content);
  const [page, setPage] = useState(pageable.pageNumber);
  const [totalPage, settotalPage] = useState(totalPages);

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
  }, [page, name, totalPage]);
  return (
    <>
      {Content && pageable && Content.length > 0 ? (
        <div className="flex flex-col">
          <ul className="mt-10 grid gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-x-8 max-w-[80rem] justify-items-stretch">
            {Content.map((item, index) => (
              <SearhMentoringCard item={item} key={index} />
            ))}
          </ul>

          {/* 페이징 버튼 */}
          <div className="py-16 flex justify-center space-x-4 items-center">
            <button
              disabled={page <= 0}
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              className="px-3 py-1 bg-white text-black border border-gray-100 text-xl"
            >
              {'<'}
            </button>

            <ul className="flex gap-x-1">
              {Array.from({ length: totalPage }, (_, index) => (
                <li key={index}>
                  <button
                    className={`px-4 py-2 border rounded-xl ${
                      index === page
                        ? 'bg-green-400 text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>

            <button
              disabled={page >= totalPage - 1}
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, totalPage - 1))
              }
              className="px-3 py-1 bg-white text-black border border-gray-100 text-xl"
            >
              {'>'}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex py-28 justify-center items-center">
          <span className="text-2xl text-black">검색된 결과가 없습니다</span>
        </div>
      )}
    </>
  );
}

export default SearchMentoring;

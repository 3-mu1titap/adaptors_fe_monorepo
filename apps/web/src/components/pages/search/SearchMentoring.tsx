'use client';
import React from 'react';
import {
  SearchMentoringListType,
  pageableType,
} from '@components/types/mentoring/mentoringTypes';
import SearhMentoringCard from './SearhMentoringCard';
import { useState, useEffect } from 'react';
import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
function SearchMentoring({
  content,
  pageable,
  name,
}: {
  content: SearchMentoringListType[];
  pageable: pageableType;
  name: string;
}) {
  const [Content, setContent] = useState<SearchMentoringListType[]>(content);
  const [page, setPage] = useState(pageable.pageNumber);
  const [totalPage, settotalPage] = useState(pageable.pageSize);

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
        <ul className="mt-10 grid gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-x-8 max-w-[80rem] justify-items-stretch">
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
      <div className="py-16 flex justify-center space-x-4 items-center">
        <button
          disabled={page <= 0}
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-white text-black border border-gray-100"
        >
          이전
        </button>
        <span>
          {page + 1} / {totalPage}
        </span>
        <button
          disabled={page >= totalPage - 1}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPage - 1))}
          className="px-4 py-2 bg-white text-black border border-gray-100"
        >
          다음
        </button>
      </div>
    </>
  );
}

export default SearchMentoring;

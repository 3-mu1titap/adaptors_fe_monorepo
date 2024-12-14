'use client';
import { MessageCircleQuestion } from 'lucide-react';
import {
  SearchResults,
  MentoringContent,
} from '../../types/mentoring/mentoringTypes';
import { useEffect, useState } from 'react';
import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
import MentoringItem from '../main/mentoring/MentoringItem';
function SearchMentoring({
  spellingCorrection,
  SearchResults,
  name,
  isDirect,
}: {
  spellingCorrection: string;
  SearchResults: SearchResults;
  name: string;
  isDirect: boolean;
}) {
  const [Content, setContent] = useState<MentoringContent[]>(
    SearchResults.content
  );
  console.log(isDirect, 'fffffffffffffff');
  const [page, setPage] = useState(0);
  const [totalPage, settotalPage] = useState(SearchResults.totalPages);

  const fetchMentoringData = async (page: number) => {
    try {
      const res = await GetMentoringNameSearch(name, page, isDirect);
      setContent(res?.searchResults.content || []);
    } catch (error) {
      console.error('Error fetching mentoring data:', error);
      setContent([]);
    }
  };
  useEffect(() => {
    fetchMentoringData(page); // 페이지 변경 감지
  }, [page, name, isDirect]);
  return (
    <>
      {spellingCorrection === '' ? (
        <div></div>
      ) : (
        <div className="flex flex-row items-center mx-4 rounded-xl bg-slate-100 py-3 mt-4 tracking-wider lg:mx-10 lg:w-full">
          <span className="text-sm text-gray-400 font-bold flex items-center gap-2 ml-4 cursor-default lg:text-md lg:flex-nowrap lg:text-center">
            <span className="text-lg text-black">제안</span>
            <MessageCircleQuestion className="w-[22px] h-[22px]" />
            <span className="text-slate-700">{spellingCorrection}</span>
            (으)로 검색한 결과입니다.
          </span>
        </div>
      )}

      {Content && totalPage && Content.length > 0 ? (
        <ul className="mt-10 grid gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Content.map((item, index) => (
            <MentoringItem
              item={item}
              key={index}
              isLoading={Content ? false : true}
            />
          ))}
        </ul>
      ) : (
        <div className="mt-10">
          <span className="text-gray-200 text-4xl">검색된 결과가 없습니다</span>
        </div>
      )}

      {Content && totalPage && Content.length > 0 ? (
        <div className="py-16 flex justify-center space-x-4 items-center rounded-lg">
          <button
            disabled={page <= 0}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            className="text-xl px-3 py-1 bg-white text-gray-300 border-2 border-gray-100 rounded-lg"
          >
            {'<'}
          </button>

          <div className="flex gap-x-2">
            {Array.from({ length: totalPage }).map((_, index) => (
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
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SearchMentoring;

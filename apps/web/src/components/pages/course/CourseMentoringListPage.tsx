'use client';
import { MentoringSession } from '@repo/ui/types/CommonType.js';
import { MentoringSessionContent } from '../../types/mentoring/mentoringTypes';
import MentoringCard from './MentoringCard';
import { useEffect, useState } from 'react';
import { GetMentoringSessionHistoryList } from '@repo/web/actions/mentoring/mentoringAction';
function CourseMentoringListPage({
  totalPages,
  content,
}: {
  totalPages: number;
  content: MentoringSessionContent[];
}) {
  const [page, setPage] = useState(0);
  const [totalPage, settotalPage] = useState(totalPages);
  const [Content, setContent] = useState<MentoringSessionContent[]>(content);

  const fetchMentoringData = async (page: number) => {
    try {
      const res = await GetMentoringSessionHistoryList(page);
      setContent(res?.content || []);
    } catch (error) {
      console.error('Error fetching mentoring data:', error);
      setContent([]);
    }
  };
  useEffect(() => {
    fetchMentoringData(page); // 페이지 변경 감지
  }, [page]);

  return (
    <>
      {content && content ? (
        <>
          <div className="flex flex-col">
            <ul className="grid lg:grid-col-2 md:grid-cols-2 mobile:gap-y-2 gap-y-3 mobile:grid-cols-1">
              {content.map((item, index) => (
                <MentoringCard key={index} item={item} />
              ))}
            </ul>
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
                          ? 'bg-adaptorsYellow text-white'
                          : 'bg-white text-black'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button
                  disabled={page >= totalPage - 1}
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPage - 1))
                  }
                  className="px-3 py-1 text-xl bg-white text-gray-300 border-2 border-gray-100 rounded-lg"
                >
                  {'>'}
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </>
      ) : (
        <div className="justify-center ">
          <span className="text-md text-black ml-36">
            참가한 멘토링이 없습니다...
          </span>
        </div>
      )}
    </>
  );
}

export default CourseMentoringListPage;

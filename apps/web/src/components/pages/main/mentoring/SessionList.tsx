'use client';
import { useState } from 'react';
import { MentoringSessionDataType } from '../../../types/mentoring/mentoringTypes';

export default function SessionList({
  mentoringSessionList,
}: {
  mentoringSessionList: MentoringSessionDataType[];
}) {
  const [showAllSessions, setShowAllSessions] = useState(false);

  // 날짜별로 세션을 그룹화하는 함수
  const getGroupedSessions = () => {
    const groupedSessions: { [key: string]: MentoringSessionDataType[] } = {};

    mentoringSessionList?.forEach((session) => {
      const date = session.startDate; // startDate를 사용하여 그룹화
      if (!groupedSessions[date]) {
        groupedSessions[date] = [];
      }
      groupedSessions[date].push(session);
    });

    return groupedSessions;
  };

  // 그룹화된 세션을 가져옴
  const groupedSessions = getGroupedSessions();

  return (
    <>
      <div className="space-y-6">
        {Object.entries(groupedSessions).map(([date, dateSessions]) => (
          <div key={date} className="space-y-3">
            <h3 className="font-medium bg-[#F0F0F0] px-3 py-1 rounded-2xl inline-block">
              {date}
            </h3>
            {dateSessions.map((session) => (
              <div
                key={session.sessionUuid}
                className="flex items-center justify-between px-4 bg-white py-6 rounded-lg shadow-sm"
              >
                <div>
                  <div className="text-2xl font-semibold mb-2">
                    {`S${session.startTime} - E${session.endTime}`}
                  </div>
                  <span className="flex items-center gap-3 mt-1 ">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold ml-1 text-[#FF922E]">
                        남은자리
                      </span>
                      <div className="text-lg font-bold text-[#FF922E] ">
                        {session.maxHeadCount - session.nowHeadCount}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-yellow-500">
                      {session.isClosed ? '마감된 세션' : '참여 가능'}
                    </div>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 font-semibold">
                    {session.price}V
                  </div>
                  <button
                    className={`px-4 py-2 rounded-xl text-xl font-medium ${
                      session.isClosed
                        ? 'bg-gray-200 text-gray-600'
                        : 'bg-adaptorsYellow text-white'
                    }`}
                  >
                    {session.isClosed ? '마감' : '참가하기'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {!showAllSessions && (
        <button
          onClick={() => setShowAllSessions(true)}
          className="w-full py-3 text-sm text-gray-500 hover:text-gray-700"
        >
          전체 세션 더보기
        </button>
      )}
    </>
  );
}

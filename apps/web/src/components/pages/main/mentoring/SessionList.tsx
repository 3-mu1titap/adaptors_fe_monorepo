'use client';
import { useState } from 'react';
import { MentoringSessionDataType } from '../../../types/mentoring/mentoringTypes';
import MentoringRequestButton from '../../../ui/Button/MentoringRequestButton';

export default function SessionList({
  mentoringSessionList,
  mentoringName,
  mentoringDate,
}: {
  mentoringSessionList: MentoringSessionDataType[];
  mentoringName?: string;
  mentoringDate?: string;
}) {
  const [showAllSessions, setShowAllSessions] = useState(false);

  // 날짜별로 세션을 그룹화하는 함수
  const getGroupedSessions = () => {
    // mentoringDate가 있고 showAllSessions가 false일 때만 필터링
    const filteredSessions =
      mentoringDate && !showAllSessions
        ? mentoringSessionList?.filter(
            (session) => session.startDate === mentoringDate
          )
        : mentoringSessionList;

    const groupedSessions: { [key: string]: MentoringSessionDataType[] } = {};

    filteredSessions?.forEach((session) => {
      const date = session.startDate;
      if (!groupedSessions[date]) {
        groupedSessions[date] = [];
      }
      groupedSessions[date].push(session);
    });

    // 날짜순으로 정렬
    const sortedGroupedSessions: { [key: string]: MentoringSessionDataType[] } =
      {};
    Object.keys(groupedSessions)
      .sort()
      .forEach((date) => {
        sortedGroupedSessions[date] = groupedSessions[date].sort((a, b) =>
          a.startTime.toString().localeCompare(b.startTime.toString())
        );
      });

    return sortedGroupedSessions;
  };

  // 그룹화된 세션을 가져옴
  const groupedSessions = getGroupedSessions();

  // 선택된 날짜에 세션이 있는지 확인
  const hasSessionsOnSelectedDate = mentoringDate
    ? mentoringSessionList?.some(
        (session) => session.startDate === mentoringDate
      )
    : false;

  return (
    <>
      <div className="space-y-6">
        {Object.entries(groupedSessions).length > 0 ? (
          Object.entries(groupedSessions).map(([date, dateSessions]) => (
            <div key={date} className="space-y-3">
              <h3 className="font-medium bg-[#F0F0F0] px-3 py-1 rounded-2xl inline-block">
                {date}
              </h3>
              {dateSessions.map((session) => (
                <div
                  key={session.sessionUuid}
                  className="flex items-center justify-between px-4 bg-white py-6 rounded-lg shadow-sm w-full"
                >
                  <div>
                    <div className="text-2xl font-semibold mb-2">
                      {`${session.startTime.toString().slice(0, 5)} - ${session.endTime.toString().slice(0, 5)}`}
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
                    {session.isParticipating ? (
                      <div className="px-4 py-2 rounded-xl text-xl font-medium bg-gray-200 text-gray-600">
                        신청완료
                      </div>
                    ) : (
                      <MentoringRequestButton
                        isClosed={session.isClosed}
                        sessionUuid={session.sessionUuid}
                        mentoringName={mentoringName ? mentoringName : ''}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            {hasSessionsOnSelectedDate
              ? '선택한 날짜에 예약 가능한 세션이 없습니다.'
              : '해당 날짜에 예약 가능한 세션이 없습니다.'}
          </div>
        )}
      </div>

      {mentoringDate &&
        !showAllSessions &&
        mentoringSessionList.length >
          (groupedSessions[mentoringDate]?.length || 0) && (
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

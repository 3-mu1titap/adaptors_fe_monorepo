'use client';
import DottedlineEllipse from '@components/assets/icons/DottedlineEllipse';
import ChevronText from '@components/ui/Text/ChevronText';
import { Button } from '@repo/ui/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { MentoringSessionDataType } from '../../../types/mentoring/mentoringTypes';
import MentoringRequestButton from '../../../ui/Button/MentoringRequestButton';
import MentorReviewOverview from './review/MentorReviewOverview';

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
      <ChevronText text="멘토링 세션" />
      <div className="space-y-6">
        {Object.entries(groupedSessions).length > 0 ? (
          Object.entries(groupedSessions).map(([date, dateSessions]) => (
            <div key={date} className="space-y-3">
              <h3 className="font-medium bg-[#F0F0F0] px-3 py-1 rounded-2xl inline-block">
                {date}
              </h3>
              {dateSessions.map((session) => (
                <figure
                  key={session.sessionUuid}
                  className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 bg-white py-6 rounded-lg shadow-sm w-full 
                  hover:ring-4 hover:ring-adaptorsYellow"
                >
                  <div className="flex items-center gap-1 sm:flex-col">
                    {/* 시간 */}
                    <div className="text-2xl sm:text-2xl font-semibold sm:mb-2 flex items-center">
                      {`S ${session.startTime.toString().slice(0, 5)} - E ${session.endTime.toString().slice(0, 5)}`}
                    </div>
                    <small className="flex items-center gap-3 sm:mt-1 ">
                      <span className="flex items-center gap-1">
                        <DottedlineEllipse className="hidden sm:block" />
                        <p className="text-lg font-bold ml-1 text-[#FF922E]">
                          남은자리
                        </p>
                        <div className="text-lg font-bold text-[#FF922E] ">
                          {session.maxHeadCount - session.nowHeadCount}
                        </div>
                      </span>
                      <span className="hidden sm:block text-lg font-bold text-yellow-500">
                        {session.isClosed ? '마감된 세션' : '참여 가능'}
                      </span>
                    </small>
                  </div>
                  <div className="flex items-center gap-5 mt-5 sm:mt-0 sm:gap-20">
                    <MentorReviewOverview />
                    {/* 가격 */}
                    <div>
                      <h1 className="text-2xl font-semibold">
                        {session.price}V
                      </h1>
                      <h2 className="hidden sm:block text-[#727272] w-full text-center">
                        volt
                      </h2>
                    </div>
                    {session.isClosed ? (
                      <div className="px-4 py-3 w-28 text-center rounded-xl text-xl font-medium bg-[#433E3E] text-white">
                        마감
                      </div>
                    ) : (
                      <MentoringRequestButton
                        price={session.price}
                        isParticipating={session.isParticipating}
                        sessionUuid={session.sessionUuid}
                        mentoringName={mentoringName ? mentoringName : ''}
                        deadlineDate={session.deadlineDate}
                      />
                    )}
                  </div>
                </figure>
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
        <Button
          className="z-20 text-black flex flex-col mx-auto"
          onClick={() => setShowAllSessions(true)}
        >
          전체 세션 더보기
          <ChevronDown className="w-5 text-adaptorsYellow" />
        </Button>
      </div>
      {/* {mentoringDate &&
        !showAllSessions &&
        mentoringSessionList.length >
          (groupedSessions[mentoringDate]?.length || 0) && (
          <button
            onClick={() => setShowAllSessions(true)}
            className="w-full py-3 text-lg text-gray-500 bg-adaptorsYellow hover:text-gray-700"
          >
            전체 세션 더보기
            <ChevronDown className="w-5 text-adaptorsYellow" />
          </button>
        )} */}
    </>
  );
}

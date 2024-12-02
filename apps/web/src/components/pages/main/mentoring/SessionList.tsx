'use client';
import ChevronText from '@components/ui/Text/ChevronText';
import {
  MentoringSessionList,
  SessionTime,
} from '../../../types/mentoring/mentoringTypes';
import MentoringRequestButton from '../../../ui/Button/MentoringRequestButton';

export default function SessionList({
  mentoringSessionList,
  mentoringName,
  mentoringDate,
}: {
  mentoringSessionList: MentoringSessionList | [];
  mentoringName?: string;
  mentoringDate?: string;
}) {
  const formatTime = (time: SessionTime | string) => {
    if (typeof time === 'string') {
      return time;
    }

    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`;
  };

  return (
    <>
      <ChevronText text="멘토링 세션" />
      <div className="space-y-6">
        {mentoringSessionList &&
          Object.entries(mentoringSessionList).map(([date, sessions]) => (
            <div key={date} className="space-y-3">
              <h3 className="font-medium bg-[#F0F0F0] px-3 py-1 rounded-2xl inline-block">
                {date}
              </h3>
              {sessions.map((session) => (
                <figure
                  key={session.sessionUuid}
                  className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 bg-white py-6 rounded-lg shadow-sm w-full hover:ring-4 hover:ring-adaptorsYellow"
                >
                  <div className="flex items-center gap-1 sm:flex-col">
                    {/* 시간 */}
                    <div className="text-2xl sm:text-2xl font-semibold sm:mb-2 flex items-center">
                      {`S ${formatTime(session.startTime)} - E ${formatTime(
                        session.endTime
                      )}`}
                    </div>
                    <small className="flex items-center gap-3 sm:mt-1">
                      <span className="flex items-center gap-1">
                        <p className="text-lg font-bold ml-1 text-[#FF922E]">
                          남은자리
                        </p>
                        <div className="text-lg font-bold text-[#FF922E]">
                          {session.maxHeadCount - session.nowHeadCount}
                        </div>
                      </span>
                      <span className="hidden sm:block text-lg font-bold text-yellow-500">
                        {session.isClosed ? '마감된 세션' : '참여 가능'}
                      </span>
                    </small>
                  </div>
                  <div className="flex items-center gap-5 mt-5 sm:mt-0 sm:gap-20">
                    {/* MentorReviewOverview 컴포넌트 추가 */}
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
                        mentoringName={mentoringName || ''}
                        deadlineDate={session.deadlineDate}
                      />
                    )}
                  </div>
                </figure>
              ))}
            </div>
          ))}
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

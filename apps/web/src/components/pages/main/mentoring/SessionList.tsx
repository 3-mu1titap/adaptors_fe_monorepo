'use client';
import ChevronText from '@components/ui/Text/ChevronText';
import DateBadge from '@components/ui/Text/DateBadge';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { MentoringSessionList } from '../../../types/mentoring/mentoringTypes';
import SessionFigure from './review/SessionFigure';

export default function SessionList({
  mentoringSessionList,
  mentoringName,
  mentoringDate,
}: {
  mentoringSessionList: MentoringSessionList | [];
  mentoringName: string;
  mentoringDate?: string;
}) {
  const [LimitNumber, setLimitNumber] = useState(5);

  let totalSessionCount = 0;
  const safeSessionList = Array.isArray(mentoringSessionList)
    ? {}
    : mentoringSessionList;

  const limitSessions = (
    sessions: MentoringSessionList
  ): MentoringSessionList => {
    if (mentoringDate) {
      return sessions;
    }
    const limitedSessions: MentoringSessionList = {};

    const sortedDates = Object.keys(sessions).sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );

    for (const date of sortedDates) {
      limitedSessions[date] = sessions[date];
      totalSessionCount += sessions[date].length;

      if (totalSessionCount >= LimitNumber) {
        break;
      }
    }

    return limitedSessions;
  };
  const filteredSessions = mentoringDate
    ? { [mentoringDate]: safeSessionList[mentoringDate] || [] }
    : limitSessions(safeSessionList);

  return (
    <>
      <ChevronText text="멘토링 세션" />
      <div className="space-y-6">
        {Object.entries(filteredSessions).map(([date, sessions]) => (
          <div key={date} className="space-y-3">
            <DateBadge date={date} />
            {sessions.map((session) => (
              <SessionFigure session={session} mentoringName={mentoringName} />
            ))}
          </div>
        ))}
        {totalSessionCount < 10 && (
          <button
            onClick={() => setLimitNumber((prev) => prev + 10)}
            className="w-full py-3 text-lg text-gray-500 hover:text-gray-700 flex flex-col items-center"
          >
            세션 더보기
            <ChevronDown className="w-5 text-adaptorsYellow" />
          </button>
        )}
      </div>
    </>
  );
}

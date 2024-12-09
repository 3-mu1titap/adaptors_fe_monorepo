'use client';
import ChevronText from '@components/ui/Text/ChevronText';
import DateBadge from '@components/ui/Text/DateBadge';
import { MentoringResult } from '@repo/ui/types/CommonType.ts';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SessionFigure from './review/SessionFigure';

export default function SessionList({
  mentoringSessionList,
  mentoringName,
  mentoringDate,
  mentorUuid,
}: {
  mentoringSessionList: MentoringResult[] | [];
  mentoringName: string;
  mentoringDate?: string;
  mentorUuid: string;
}) {
  const [LimitNumber, setLimitNumber] = useState(5);
  const totalSum = mentoringDate
    ? mentoringSessionList
        .filter((item) => item.startDate === mentoringDate)
        .reduce((sum, item) => sum + item.totalCount, 0)
    : mentoringSessionList.reduce((sum, item) => sum + item.totalCount, 0);

  const filteredList = mentoringDate
    ? mentoringSessionList.filter((item) => item.startDate === mentoringDate)
    : mentoringSessionList;

  return (
    <>
      <ChevronText text="멘토링 세션" />
      <div className="space-y-6">
        {filteredList.map((sessions, index) => (
          <div key={index} className="space-y-3">
            <DateBadge date={sessions.startDate} />
            {sessions.mentoringSessionResponseDtoList.map((session) => (
              <SessionFigure
                session={session}
                mentoringName={mentoringName}
                mentorUuid={mentorUuid}
              />
            ))}
          </div>
        ))}
        {LimitNumber < totalSum && (
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

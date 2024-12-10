'use client';
import CustomDateBadge from '@repo/ui/components/ui/custom/CustomDateBadge';
import {
  MentoringDataType,
  MentoringResult,
} from '@repo/ui/types/CommonType.ts';
import SessionFigure from './review/SessionFigure';

export default function SessionList({
  filteredList,
  MentoringData,
}: {
  filteredList: MentoringResult[];
  MentoringData: MentoringDataType | null;
}) {
  return (
    <div className="space-y-6">
      {filteredList
        .map((sessions, index) => (
          <div key={index} className="space-y-3">
            <CustomDateBadge date={sessions.startDate} />
            {sessions.mentoringSessionResponseDtoList.map((session) => (
              <SessionFigure
                session={session}
                mentoringName={MentoringData?.name}
                key={session.sessionUuid}
                mentorUuid={MentoringData?.mentorUuid}
              />
            ))}
          </div>
        ))
        .slice(0, 2)}
    </div>
  );
}

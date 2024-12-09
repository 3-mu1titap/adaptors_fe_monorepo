import {
  MentoringDataType,
  MentoringResult,
} from '@repo/ui/types/CommonType.ts';
import CustomDateBadge from './CustomDateBadge';
import CustomSessionFigure from './CustomSessionFigure';

function CustomSessionList({
  filteredList,
  mentoringName,
}: {
  filteredList: MentoringResult[];
  mentoringName: MentoringDataType | null;
}) {
  return (
    <div className="space-y-6">
      {filteredList
        .map((sessions, index) => (
          <div key={index} className="space-y-3">
            <CustomDateBadge date={sessions.startDate} />
            {sessions.mentoringSessionResponseDtoList.map((session) => (
              <CustomSessionFigure
                session={session}
                mentoringName={mentoringName?.name}
                key={session.sessionUuid}
              />
            ))}
          </div>
        ))
        .slice(0, 2)}
    </div>
  );
}

export default CustomSessionList;

import { Badge } from '@repo/ui/components/ui/badge';
import { format, parseISO } from 'date-fns';
import MentoringSessionCard from './MentoringSeesionCard';
import { MentoringSessionDataType } from '@repo/admin/components/types/main/mentor/mentoringTypes';

export default function MentoringSessionList({
  dateGroup,
}: {
  dateGroup: MentoringSessionDataType;
}) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        {format(parseISO(dateGroup.startDate), 'yyyy년 MM월 dd일')}
        <Badge className="ml-2 text-md text-white bg-adaptorsYellow">
          {dateGroup.totalCount}개 세션
        </Badge>
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dateGroup.mentoringSessionResponseDtoList.map((session) => (
          <MentoringSessionCard key={session.sessionUuid} session={session} />
        ))}
      </div>
    </>
  );
}

import {
  MentoringDataType,
  MentoringSessionDataType,
  MentoringSessionDateDataType,
} from '@repo/client/components/types/main/mentor/mentoringTypes';
import { format, parseISO } from 'date-fns';
import { Badge } from '@repo/ui/components/ui/Badge';
import MentoringSessionCard from '../session/MentoringSeesionCard';
import MentoringInfoCard from '../session/MentoringInfoCard';

export default function MentoringContent({
  mentoringInfo,
  mentoringSessionData,
}: {
  mentoringInfo: MentoringDataType;
  mentoringSessionData: MentoringSessionDataType[];
}) {
  return (
    <main className="w-full p-4">
      <MentoringInfoCard
        name={mentoringInfo.name}
        description={mentoringInfo.description}
        detail={mentoringInfo.detail}
        thumbnailUrl={mentoringInfo.thumbnailUrl}
        mentoringCategoryList={mentoringInfo.mentoringCategoryList}
      />
      {mentoringSessionData?.length === 0 ? (
        <p>현재 등록된 멘토링 세션이 없습니다.</p>
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6">멘토링 세션 목록</h1>
          {mentoringSessionData.map((dateGroup) => (
            <div key={dateGroup.startDate} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {format(parseISO(dateGroup.startDate), 'yyyy년 MM월 dd일')}
                <Badge className="ml-2 text-md text-white bg-adaptorsYellow">
                  {dateGroup.totalCount}개 세션
                </Badge>
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {dateGroup.mentoringSessionResponseDtoList.map((session) => (
                  <MentoringSessionCard
                    key={session.sessionUuid}
                    session={session}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

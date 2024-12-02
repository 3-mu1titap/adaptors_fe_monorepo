import {
  MentoringDataType,
  MentoringSessionDataType,
} from '@repo/client/components/types/main/mentor/mentoringTypes';
import MentoringSessionCard from '../session/MentoringSeesionCard';

export default function MentoringContent({
  mentoringInfo,
  mentoringSessionData,
}: {
  mentoringInfo: MentoringDataType;
  mentoringSessionData: MentoringSessionDataType[];
}) {
  return (
    <main className="w-full p-4">
      {mentoringInfo.name}
      {mentoringInfo.detail}
      {mentoringSessionData?.length === 0 ? (
        <p>현재 등록된 멘토링 세션이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentoringSessionData.map((session, index) => (
            <MentoringSessionCard key={index} session={session} />
          ))}
        </div>
      )}
    </main>
  );
}

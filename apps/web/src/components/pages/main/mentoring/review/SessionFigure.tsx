import {
  CustomReviewerItem,
  CustomValueUnit,
} from '@repo/ui/components/ui/custom/index';
import { MentoringSession, SessionTime } from '@repo/ui/types/CommonType.ts';
import MentoringRequestButton from '@repo/web/components/ui/Button/MentoringRequestButton';
import { CircleDashed } from 'lucide-react';

export default function SessionFigure({
  session,
  mentoringName = 'mentoring Name',
  mentorUuid = '',
}: {
  session: MentoringSession;
  mentoringName?: string;
  mentorUuid?: string;
}) {
  const formatTime = (time: SessionTime | string) => {
    if (typeof time === 'string') {
      return time.endsWith(':00') ? time.slice(0, -3) : time; // 뒤에 ":00" 제거
    }
    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`;
  };

  return (
    <>
      <figure
        // key={session.sessionUuid}
        className="flex flex-row items-center justify-between px-4 sm:px-8 bg-white ring-adaptorsYellow py-4 rounded-lg shadow-sm w-full hover:ring-2 hover:ring-adaptorsYello ring-0 transition-all hover:drop-shadow-lg"
      >
        <div className="flex items-center gap-1 w-full justify-center flex-col">
          {/* 시간 */}
          <time className="text-xl md:text-md w-full lg:text-xl xl:text-2xl font-semibold flex items-center">
            {`S ${formatTime(session.startTime)} - E ${formatTime(
              session.endTime
            )}`}
          </time>
          {!session.isClosed ? (
            <span className="w-full flex items-center gap-1">
              <CircleDashed className="hidden sm:block w-4" />
              <p className="text-lg font-bold ml-1 text-[#FF922E]">
                남은자리 {session.maxHeadCount - session.nowHeadCount}
              </p>
            </span>
          ) : (
            <span className="hidden sm:block text-lg font-bold text-yellow-500">
              마감된 세션
            </span>
          )}
        </div>
        <div className="w-full flex justify-between md:justify-end md:gap-5 items-center mt-5 sm:mt-0 lg:gap-10 xl:gap-20">
          <CustomReviewerItem initialUserData={session.sessionUserList} />
          <CustomValueUnit value={session.price} unit="Volt" />
          {/* <Button className="bg-adaptorsYellow hover:bg-black">참가하기</Button> */}
          <MentoringRequestButton
            sessionUuid={session.sessionUuid}
            mentoringName={mentoringName}
            deadlineDate={session.deadlineDate}
            isParticipating={session.isParticipating}
            price={session.price}
            isClosed={session.isClosed}
            mentorUuid={mentorUuid}
          />
        </div>
      </figure>
    </>
  );
}

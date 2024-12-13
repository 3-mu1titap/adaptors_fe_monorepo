import {
  CustomReviewerItem,
  CustomValueUnit,
} from '@repo/ui/components/ui/custom/index';
import { MentoringSession, SessionTime } from '@repo/ui/types/CommonType.ts';
import { SessionRequestButton } from '@repo/web/components/ui/Button/SessionRequestButton';
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
  console.log('sessionFigure', session.sessionUserList);
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
        <div
          className={`w-full flex justify-end md:gap-5 items-center mt-5 sm:mt-0 lg:gap-10 xl:gap-20`}
        >
          {session.nowHeadCount != 0 && (
            <>
              <CustomReviewerItem
                initialUserData={session.sessionUserList}
                userCount={session.nowHeadCount}
                text="now"
              />
            </>
          )}
          <CustomValueUnit value={session.price} unit="Volt" />
          {session.isClosed ? (
            <div className="px-4  py-3.5 w-24 md:w-28 text-center rounded-md text-md md:text-xl font-medium bg-[#433E3E] text-white">
              마감
            </div>
          ) : (
            <SessionRequestButton
              sessionUuid={session.sessionUuid}
              mentoringName={mentoringName}
              deadlineDate={session.deadlineDate}
              isParticipating={session.isParticipating}
              price={session.price}
              isClosed={session.isClosed}
              mentorUuid={mentorUuid}
            />
          )}
        </div>
      </figure>
    </>
  );
}

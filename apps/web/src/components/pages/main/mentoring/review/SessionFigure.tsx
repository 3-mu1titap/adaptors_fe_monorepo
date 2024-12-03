import DottedlineEllipse from '@components/assets/icons/DottedlineEllipse';
import {
  MentoringSessionData,
  SessionTime,
} from '@components/types/mentoring/mentoringTypes';
import MentoringRequestButton from '@components/ui/Button/MentoringRequestButton';
import ValueUnit from '@components/ui/Text/ValueUnit';
import MentorReviewOverview from './MentorReviewOverview';

export default function SessionFigure({
  session,
  mentoringName,
}: {
  session: MentoringSessionData;
  mentoringName: string;
}) {
  const formatTime = (time: SessionTime | string) => {
    if (typeof time === 'string') {
      return time.endsWith(':00') ? time.slice(0, -3) : time; // 뒤에 ":00" 제거
    }

    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`;
  };

  return (
    <figure
      key={session.sessionUuid}
      className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 bg-white py-6 rounded-lg shadow-sm w-full hover:ring-4 hover:ring-adaptorsYellow"
    >
      <div className="flex items-center gap-1 w-full sm:flex-col">
        {/* 시간 */}
        <time className="text-lg w-full lg:text-2xl font-semibold sm:mb-2 flex items-center">
          {`S ${formatTime(session.startTime)} - E ${formatTime(
            session.endTime
          )}`}
        </time>
        {!session.isClosed ? (
          <span className="w-full flex items-center gap-1">
            <DottedlineEllipse className="hidden sm:block" />
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
      <div className="flex gap-5 items-center mt-5 sm:mt-0 xl:gap-16">
        <MentorReviewOverview />
        <ValueUnit value={session.price} unit="Volt" />
        <MentoringRequestButton
          isClosed={session.isClosed}
          price={session.price}
          isParticipating={session.isParticipating}
          sessionUuid={session.sessionUuid}
          mentoringName={mentoringName || ''}
          deadlineDate={session.deadlineDate}
        />
      </div>
    </figure>
  );
}

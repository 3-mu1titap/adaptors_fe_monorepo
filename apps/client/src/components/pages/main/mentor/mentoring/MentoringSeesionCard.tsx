import { MentoringSessionDataType } from '../../../../../components/types/main/mentor/mentoringTypes';

function MentoringSessionCard({
  session,
}: {
  session: MentoringSessionDataType;
}) {
  const formatDate = (date: Date | string, type: string) => {
    const d = new Date(date);
    if (type === 'time') {
      return d.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    return d.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatTime = (time: Date | string) => {
    return time.toString().slice(0, 5);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">멘토링 세션</div>
        <div className="text-gray-700 text-base space-y-2">
          <p>
            <span className="font-semibold">날짜:</span>{' '}
            {formatDate(session.startDate, 'time')}
          </p>
          <p>
            <span className="font-semibold">시간:</span>{' '}
            {formatTime(session.startTime)} ~ {formatTime(session.endTime)}
          </p>
          <p>
            <span className="font-semibold">신청 마감:</span>{' '}
            {formatDate(session.deadlinestringtime, '')}
          </p>
          <p>
            <span className="font-semibold">인원:</span> {session.minHeadCount}{' '}
            - {session.maxHeadCount}명
          </p>
          <p>
            <span className="font-semibold">가격:</span>{' '}
            {session.price.toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentoringSessionCard;

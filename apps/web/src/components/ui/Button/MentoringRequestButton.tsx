'use client';

import { SessionRequest } from '../../../actions/mentoring/mentoringAction';

export default function MentoringRequestButton({
  isClosed,
  sessionUuid,
  mentoringName,
}: {
  isClosed: boolean;
  sessionUuid: string;
  mentoringName: string;
}) {
  const onClickButton = () => {
    SessionRequest({
      sessionUuid: sessionUuid,
      mentoringName: mentoringName,
    });
  };
  return (
    <button
      onClick={onClickButton}
      className={`px-4 py-2 rounded-xl text-xl font-medium ${
        isClosed ? 'bg-gray-200 text-gray-600' : 'bg-adaptorsYellow text-white'
      }`}
    >
      {isClosed ? '마감' : '참가하기'}
    </button>
  );
}

'use client';

import Swal from 'sweetalert2';
import {
  SessionCancel,
  SessionRequest,
} from '../../../actions/mentoring/mentoringAction';

export default function MentoringRequestButton({
  isClosed,
  sessionUuid,
  mentoringName,
  deadlineDate,
  isParticipating,
}: {
  isClosed: boolean;
  sessionUuid: string;
  mentoringName: string;
  deadlineDate: string;
  isParticipating: boolean;
}) {
  const onClickButton = async () => {
    const status = !isParticipating
      ? await SessionRequest({
          sessionUuid: sessionUuid,
          mentoringName: mentoringName,
        })
      : await SessionCancel({
          sessionUuid: sessionUuid,
          deadlineDate: deadlineDate,
        });

    if (status == 200) {
      Swal.fire({
        toast: true,
        icon: 'success',
        title: isParticipating ? '신청 취소되었습니다' : '신청 완료되었습니다',
        showConfirmButton: false,
        customClass: {
          title: 'text-lg font-semibold text-gray-800 text-center',
          actions: '!grid !grid-cols-2 !justify-center',
        },
        timer: 2000,
      });
    }
  };

  return (
    <button
      onClick={onClickButton}
      className={`px-4 py-3 rounded-[10px] text-xl w-28 ${
        isParticipating
          ? 'bg-gray-200 text-gray-600'
          : 'bg-adaptorsYellow text-white'
      }`}
    >
      {isParticipating ? '취소하기' : '참가하기'}
    </button>
  );
}

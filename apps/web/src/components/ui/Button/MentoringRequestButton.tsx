'use client';

import Swal from 'sweetalert2';
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
  const onClickButton = async () => {
    const status = await SessionRequest({
      sessionUuid: sessionUuid,
      mentoringName: mentoringName,
    });
    console.log(status);
    if (status == 200) {
      Swal.fire({
        toast: true,
        icon: 'success',
        title: '신청완료되었습니다',
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
      className={`px-4 py-2 rounded-xl text-xl font-medium ${
        isClosed ? 'bg-gray-200 text-gray-600' : 'bg-adaptorsYellow text-white'
      }`}
    >
      {isClosed ? '마감' : '참가하기'}
    </button>
  );
}

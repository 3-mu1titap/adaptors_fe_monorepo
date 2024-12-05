'use client';

import { Button } from '@repo/ui/components/ui/button';
import { useState } from 'react';
import Swal from 'sweetalert2';
import {
  SessionCancel,
  SessionRequest,
} from '../../../actions/mentoring/mentoringAction';

export default function MentoringRequestButton({
  sessionUuid,
  mentoringName,
  deadlineDate,
  isParticipating,
  price,
  isClosed,
  mentorUuid,
}: {
  sessionUuid: string;
  mentoringName: string;
  deadlineDate: string;
  isParticipating: boolean;
  price: number;
  isClosed: boolean;
  mentorUuid: string;
}) {
  const [isRegistered, setIsRegistered] = useState(isParticipating);
  const onClickButton = async () => {
    Swal.fire({
      toast: true,
      // icon: 'success',
      title: isRegistered
        ? `신청을 취소하시겠습니까?`
        : `세션을 신청하시겠습니까?`,
      html: `<p class="text-center">
      <span style="color: #ff2c2c;">${price}V</span>가 차감됩니다</p>`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: '확인',
      denyButtonText: '취소',
      customClass: {
        title: 'text-lg font-semibold text-gray-800 !text-center',
        actions: '!grid !grid-cols-2 !justify-center',
        confirmButton:
          'bg-adaptorsYellow text-black py-2 px-4 rounded hover:bg-amber-500',
        denyButton:
          'text-black py-2 px-4 rounded bg-gray-100 hover:bg-gray-300',
      },
    }).then((result) => {
      if (result.isConfirmed && isRegistered) {
        SessionCancel({
          sessionUuid: sessionUuid,
          deadlineDate: deadlineDate,
          mentorUuid: mentorUuid,
        });
        setIsRegistered((prev) => !prev);
      } else if (result.isConfirmed && !isRegistered) {
        SessionRequest({
          sessionUuid: sessionUuid,
          mentoringName: mentoringName,
          mentorUuid: mentorUuid,
        });
        setIsRegistered((prev) => !prev);
      }
    });
  };

  return (
    <div>
      {isClosed ? (
        <div className="px-4 py-3.5 max-w-24 md:w-28 text-center rounded-md text-md md:text-xl font-medium bg-[#433E3E] text-white">
          마감
        </div>
      ) : (
        <Button
          onClick={onClickButton}
          className={`px-6 md:px-10 md:py-6 rounded-[10px] text-md md:text-lg  max-w-24 md:w-28 ${
            isRegistered
              ? 'bg-gray-200 text-gray-600 hover:bg-gray-200'
              : 'bg-adaptorsYellow text-white hover:bg-black'
          }`}
        >
          {isRegistered ? '취소하기' : '참가하기'}
        </Button>
      )}
    </div>
  );
}

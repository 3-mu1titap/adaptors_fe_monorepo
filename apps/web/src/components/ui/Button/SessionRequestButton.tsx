import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@repo/ui/components/ui/alertDialog';
import { Button } from '@repo/ui/components/ui/button';
import {
  SessionCancel,
  SessionRequest,
} from '@repo/web/actions/mentoring/mentoringAction';
import { useState } from 'react';

export function SessionRequestButton({
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
    if (isRegistered) {
      const result = SessionCancel({
        sessionUuid: sessionUuid,
        deadlineDate: deadlineDate,
      });
      if (!result) setIsRegistered((prev) => !prev);
    } else {
      const result = SessionRequest({
        sessionUuid: sessionUuid,
        mentoringName: mentoringName,
        mentorUuid: mentorUuid,
        volt: price,
      });
      if (!result) setIsRegistered((prev) => !prev);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={`px-6 md:px-10 md:py-6 rounded-[10px] text-md md:text-lg max-w-24 md:w-28 ${
            isRegistered
              ? 'bg-gray-200 text-gray-600 hover:bg-gray-200'
              : 'bg-adaptorsYellow text-white hover:bg-black'
          }`}
        >
          {isRegistered ? '취소하기' : '참가하기'}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-md w-[80%] sm:max-w-[300px]">
        <AlertDialogHeader>
          <AlertDialogTitle>{`세션을 ${isRegistered ? '취소' : '신청'}하시겠습니까?`}</AlertDialogTitle>
          <AlertDialogDescription>
            {!isRegistered
              ? `참가하기 클릭 시 세션 참가가 확정되며 ${price}V가 차감됩니다`
              : `환불은 영업일 기준 최대 7일 소요됩니다`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소하기</AlertDialogCancel>
          <AlertDialogAction
            onClick={onClickButton}
            className="bg-black hover:bg-adaptorsYellow hover:text-black"
          >
            참가하기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

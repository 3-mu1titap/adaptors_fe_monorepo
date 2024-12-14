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
import { useSession } from '@repo/web/app/context/SessionContext';
import { useRouter } from 'next/navigation';
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
  const session = useSession();
  const isLogin = session.isAuth;
  const router = useRouter();
  const onClickButton = async () => {
    if (isRegistered) {
      const result = await SessionCancel({
        sessionUuid: sessionUuid,
        deadlineDate: deadlineDate,
      });
      if (result == 200) setIsRegistered((prev) => !prev);
    } else {
      const result = await SessionRequest({
        sessionUuid: sessionUuid,
        mentoringName: mentoringName,
        mentorUuid: mentorUuid,
        volt: price,
      });
      if (result == 200) setIsRegistered((prev) => !prev);
    }
  };
  const handleAuth = () => {
    router.push('/login');
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
      {isLogin ? (
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
            <AlertDialogCancel>닫기</AlertDialogCancel>
            <AlertDialogAction
              onClick={onClickButton}
              className="bg-black hover:bg-adaptorsYellow hover:text-black"
            >
              {`${isRegistered ? '세션 신청 취소하기' : '세션 신청하기'}`}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      ) : (
        <AlertDialogContent className="rounded-md w-[80%] sm:max-w-[300px]">
          <AlertDialogHeader>
            <AlertDialogTitle>로그인이 필요한 서비스입니다</AlertDialogTitle>
            <AlertDialogDescription>
              {`로그인 버튼 클릭 시 로그인 페이지로
              이동합니다.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소하기</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleAuth}
              className="bg-black hover:bg-adaptorsYellow hover:text-black"
            >
              로그인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
}

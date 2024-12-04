'use client';
import { Button } from '@repo/ui/components/ui/button';

export default function FeedbackSubmitButton({
  handelSubmitButton,
}: {
  handelSubmitButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Button
      type="submit" // 버튼 타입을 submit으로 설정
      variant={'adaptors'}
      size={'xl'}
      className="text-lg mx-auto my-4 block"
      onClick={handelSubmitButton}
    >
      입력완료
    </Button>
  );
}

'use client';
import { Button } from '@repo/ui/components/ui/button';
import { useRouter } from 'next/navigation';

export default function MoreReviewButton() {
  const router = useRouter();
  const handleButton = () => {
    router.push('/mentoring/1/review');
  };
  return (
    <Button
      className="bg-yellow-200 text-black hover:bg-yellow-600 hover:text-white text-lg w-full"
      onClick={handleButton}
    >
      MORE
    </Button>
  );
}

'use client';
import { Button } from '@repo/ui/components/ui/button';
import { ArrowRightCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
function JoinFreeButton() {
  const router = useRouter();
  return (
    <Button
      className="bg-[#F8D448] text-white py-2 px-4 rounded-lg md:text-md hover:bg-[#111111]"
      onClick={() => router.push('/login')}
    >
      Join Free
      <ArrowRightCircle size={20} />
    </Button>
  );
}
export default JoinFreeButton;

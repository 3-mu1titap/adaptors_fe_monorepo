import { Button } from '@repo/ui/components/ui/button';
import Link from 'next/link';
function VoltCharge({ points }: { points: any }) {
  return (
    <div className="flex  max-w-[64rem] mx-auto space-x-10 bg-white rounded-2xl mt-10 justify-between border-2 border-gray-200">
      <div className="flex flex-col items-start p-10 gap-y-3 ">
        <span className="text-xl font-semibold text-black">
          사용 가능한 볼트 수
        </span>

        <span className="text-4xl font-bold">{points} 볼트</span>
      </div>

      <div className="flex mr-42 justify-center items-center">
        <Link href="/payment">
          <Button className="flex mr-56 bg-yellow-200 self-center hover:bg-black hover:text-white text-black py-4">
            충전
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default VoltCharge;

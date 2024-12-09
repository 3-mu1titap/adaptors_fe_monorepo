import React from 'react';
import { Button } from '@repo/ui/components/ui/button';
import Link from 'next/link';
import { GetMemberPointListDataType } from '@components/types/payment/paymentType';
async function VoltCharge({ points }: { points: any }) {
  return (
    <div className="flex  space-x-10 bg-white rounded-2xl mt-16 justify-between border-2 border-gray-200">
      <div className="flex flex-col items-start p-10 gap-y-3 ">
        <span className="text-2xl font-bold text-black">남은 볼트</span>

        <span className="text-4xl font-bold">
          {points.toLocaleString('ko-kr')} 볼트
        </span>
      </div>

      <div className="flex mr-10 justify-center items-center">
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

'use client';

import { useState } from 'react';
import { Button } from '@repo/ui/components/ui/button';
import VoltChargeModal from '../Modal/VoltChargeModal';
import Link from 'next/link';

function VoltCharge({ points }: { points: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(true); // Dialog 열기
  };

  const handleDialogClose = () => {
    setIsOpen(false); // Dialog 닫기
  };

  return (
    <>
      <div className="flex mx-16 space-x-10 md:px-4 bg-white rounded-2xl mt-10 justify-between border-2 border-gray-200">
        <div className="flex flex-col items-start  ml-3 px-7 md:px-3 md:py-2 md:ml-3 lg:p-10 lg:gap-y-3">
          <span className="text-sm lg:text-xl  font-semibold text-black">
            사용 가능한 볼트 수
          </span>
          <span className="text-lg lg:text-4xl font-bold">
            {points.toLocaleString('ko-kr')} 볼트
          </span>
        </div>

        <div className="flex items-center">
          {/* 충전 버튼 */}
          <Link href={'/payment'}>
            <Button
              className="flex bg-yellow-200 mr-8 hover:bg-black hover:text-white text-black py-4"
              // onClick={handleDialogOpen}
            >
              충전
            </Button>
          </Link>
        </div>
      </div>

      {/* VoltChargeModal */}
      {/* <VoltChargeModal isOpen={isOpen} onClose={handleDialogClose} /> */}
    </>
  );
}

export default VoltCharge;

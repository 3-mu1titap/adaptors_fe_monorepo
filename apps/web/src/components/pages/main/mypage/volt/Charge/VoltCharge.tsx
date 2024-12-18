'use client';

import { Button } from '@repo/ui/components/ui/button';
import Link from 'next/link';

function VoltCharge({ points }: { points: number }) {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleDialogOpen = () => {
  //   setIsOpen(true); // Dialog 열기
  // };

  // const handleDialogClose = () => {
  //   setIsOpen(false); // Dialog 닫기
  // };

  return (
    <>
      <div className="flex max-w-full lg:mx-16 py-4 px-3 mx-3 bg-white rounded-2xl justify-between border-2 border-gray-200">
        <div className="flex flex-col items-start ml-4 lg:gap-y-3">
          <span className="text-sm lg:text-xl  font-semibold text-black">
            사용 가능한 볼트 수
          </span>
          <span className="text-lg lg:text-4xl font-bold">
            {points.toLocaleString('ko-kr')} Volt
          </span>
        </div>

        <div className="flex items-center">
          {/* 충전 버튼 */}
          <Link href={'/payment'}>
            <Button
              className="flex bg-adaptorsYellow font-semibold hover:bg-black hover:text-white text-black py-4"
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

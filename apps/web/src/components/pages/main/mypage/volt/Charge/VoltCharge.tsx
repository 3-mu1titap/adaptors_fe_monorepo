import React from 'react';
import { Button } from '@repo/ui/components/ui/button';
import Link from 'next/link';
function VoltCharge() {
  return (
    <div className="flex justify-center space-x-10 items-center">
      {/* 현재 남은 볼트 수 */}
      <span className="text-2xl font-bold text-black">남은 볼트 수: {0}</span>

      <Link href="/payment">
        <Button className="bg-yellow-200 hover:bg-black hover:text-white text-black py-4">
          충전
        </Button>
      </Link>
    </div>
  );
}

export default VoltCharge;

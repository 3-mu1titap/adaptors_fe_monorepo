import React from 'react';
import ChargePage from '@components/pages/main/mypage/volt/Charge/ChargePage';
import VoltUsageList from '@components/pages/main/mypage/volt/VoltUsageList';
import VoltCharge from '@components/pages/main/mypage/volt/Charge/VoltCharge';
function page() {
  return (
    <div className="container mx-auto max-w-[64rem]">
      <div className="flex flex-col  mt-24 mx-auto max-w-[64rem] ">
        {/* 볼츠 충전 컴포넌트 */}
        <VoltCharge />

        {/* 사용내역 */}
        <VoltUsageList />
      </div>
    </div>
  );
}

export default page;

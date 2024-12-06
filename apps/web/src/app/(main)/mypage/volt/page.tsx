import React from 'react';
import ChargePage from '@components/pages/main/mypage/volt/Charge/ChargePage';
import VoltUsageList from '@components/pages/main/mypage/volt/VoltUsageList';
import VoltCharge from '@components/pages/main/mypage/volt/Charge/VoltCharge';
import { GetMemberPoint } from 'src/actions/payment/paymentActions';
import { GetMemberPointListResType } from '@components/types/payment/paymentType';
import { GetPointList } from 'src/actions/payment/paymentActions';
import MentorTitleSection from '@components/pages/mentor/compoent/MentorTitleSection';
async function page() {
  //회원의 남은 포인트 조회
  const res = await GetMemberPoint();
  console.log(res, '회원 포인트 조회 성공');

  const data = await GetPointList();
  console.log(data, '포인트 리스트 조회 성공');

  return (
    <>
      <div className="container mx-auto max-w-[80rem] bg-gray-100 h-full">
        <div className="flex flex-col  mt-16 mx-auto max-w-[64rem]">
          {/* 볼츠 충전 컴포넌트 */}
          <VoltCharge points={res?.result || undefined} />

          <div className="flex flex-col mt-4 max-w-[64rem] rounded-2xl bg-white border-2 border-gray-200 p-10">
            <MentorTitleSection title="충전내역" subtitle="충전내역" />

            <ul className="flex flex-col underline-offset-1 gap-y-4 just max-w-[40rem] h-auto">
              {data &&
                data.map((item, id) =>
                  item ? <VoltUsageList key={id} item={item} /> : null
                )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

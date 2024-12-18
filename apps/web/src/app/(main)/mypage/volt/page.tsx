import VoltCharge from '@repo/web/components/pages/main/mypage/volt/Charge/VoltCharge';
import VoltUsageList from '@repo/web/components/pages/main/mypage/volt/VoltUsageList';

import {
  GetMemberPoint,
  GetPointList,
} from 'src/actions/payment/paymentActions';

async function page() {
  // 회원의 남은 포인트 조회
  const res = await GetMemberPoint();

  const data = await GetPointList(0);

  return (
    <>
      <div className="container mx-auto lg:max-w-full md:max-w-[50rem] max-w-full bg-gray-100 h-full">
        <div className="flex flex-col py-8 mx-auto lg:max-w-full">
          {/* 볼트 페이지 헤더 */}
          <div className="hide flex items-center justify-between mb-6">
            <span
              className="text-black font-bold text-5xl ml-10"
              title="My Volt"
            >
              My Volt
            </span>
          </div>
          <VoltCharge points={res?.result || 0} />
          <ul className="flex flex-col underline-offset-1 gap-y-4 h-auto">
            {data && res !== null && res !== undefined && res.result > 0 ? (
              <VoltUsageList
                total={data?.result?.totalPage}
                item={data?.result?.paymentResponseDtoList}
              />
            ) : (
              <div className="flex justify-center mt-8 text-lg text-black">
                현재 충전한 결제 내역이 없습니다..
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default page;

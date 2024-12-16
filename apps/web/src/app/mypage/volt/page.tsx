import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs';
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
      <div className="container mx-auto lg:max-w-full md:max-w-[50rem] mobile:max-w-[400px] max-w-[300px] bg-gray-100 h-full">
        <div className="flex flex-col py-8 mt-7 mx-auto lg:max-w-full">
          {/* 볼트 페이지 헤더 */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="ml-10 text-black font-bold text-5xl"
              title="My Volt"
            >
              My Volt
            </span>
          </div>
          <VoltCharge points={res?.result || 0} />
          <ul className="flex flex-col underline-offset-1 gap-y-4 h-auto">
            {(data && (
              <VoltUsageList
                total={data?.result.totalPage}
                item={data.result.paymentResponseDtoList}
              />
            )) ||
              null}
          </ul>
        </div>
      </div>
    </>
  );
}

export default page;

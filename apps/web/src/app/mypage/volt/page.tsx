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
      <div className="container mx-auto lg:max-w-full md:max-w-[50rem] mobile:max-w-[400px] max-w-[300px] bg-gray-100 h-full relative">
        <div className="flex flex-col py-8 mt-7 mx-auto lg:max-w-full">
          {/* 볼트 페이지 헤더 */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="ml-20 text-black font-bold text-4xl"
              title="My Volt"
            >
              My Volt
            </span>
          </div>

          <Tabs defaultValue="Charge">
            {/* Tabs List Positioned in Top-Right */}
            <div className="absolute top-5 right-8 max-w-[250px] items-center">
              <TabsList className="shadow-lg bg-gray-300 rounded-md flex space-y-2">
                <TabsTrigger
                  className="px-3 py-2 text-lg hover:bg-black hover:text-white rounded-md"
                  value="Charge"
                >
                  Charge
                </TabsTrigger>
                <TabsTrigger
                  className="px-3 py-2 text-lg hover:bg-black hover:text-white rounded-md"
                  value="ChargeList"
                >
                  Charge List
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tabs Content */}
            <div className="mt-10 w-full">
              <TabsContent value="Charge">
                <VoltCharge points={res?.result || undefined} />
              </TabsContent>
              <TabsContent value="ChargeList">
                <ul className="flex flex-col underline-offset-1 gap-y-4 h-auto">
                  {(data && (
                    <VoltUsageList
                      total={data?.result.totalPage}
                      item={data.result.paymentResponseDtoList}
                    />
                  )) ||
                    null}
                </ul>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default page;

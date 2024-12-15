import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs';
import VoltCharge from '@repo/web/components/pages/main/mypage/volt/Charge/VoltCharge';
import VoltUsageList from '@repo/web/components/pages/main/mypage/volt/VoltUsageList';
import MentorTitleSection from '@repo/web/components/pages/mentor/compoent/MentorTitleSection';
import MenteeProfile from '@repo/web/components/pages/profile/MenteeProfile';
import {
  GetMemberPoint,
  GetPointList,
} from 'src/actions/payment/paymentActions';
async function page() {
  //회원의 남은 포인트 조회
  const res = await GetMemberPoint();
  // console.log(res, '회원 포인트 조회 성공');

  const data = await GetPointList(0);
  // console.log(data, '포인트 리스트 조회 성공');

  return (
    <>
      <div className="container mx-auto lg:max-w-full md:max-w-[50rem] moblie:max-w-[400px] max-w-[300px] bg-gray-100 h-full">
        <div className="flex flex-col py-8 mt-7 mx-auto lg:max-w-full">
          <MentorTitleSection title="My Volt " subtitle="My Volt" />
          <Tabs defaultValue="Charge">
            <TabsList className="shadow-2xl">
              <TabsTrigger className="hover:bg-black" value="Charge">
                Charge
              </TabsTrigger>
              <TabsTrigger value="ChargeList">Charge List</TabsTrigger>
            </TabsList>

            <TabsContent value="Charge">
              {/* 볼츠 충전 컴포넌트 */}
              <span className="text-black text-3xl ml-14 mt-11 font-bold text-center">
                볼트 충전
              </span>
              <VoltCharge points={res?.result || undefined} />
            </TabsContent>
            <TabsContent value="ChargeList">
              <span className="text-black text-3xl ml-14 font-bold text-center">
                볼트 내역
              </span>
              <ul className="flex flex-col underline-offset-1 gap-y-4 just h-auto">
                {(data && (
                  <VoltUsageList
                    total={data?.result.totalPage}
                    item={data.result.paymentResponseDtoList}
                  />
                )) ||
                  null}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default page;

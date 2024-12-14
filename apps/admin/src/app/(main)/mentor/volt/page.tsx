import { GetMentorVolts } from '@repo/admin/actions/volt/voltAction';
import ReceivedVolts from '@repo/admin/components/pages/main/mentor/volt/ReceivedVolts';
import { mentorVoltListDataType } from '@repo/admin/components/types/main/mypage/myPageTypes';
import ExchangeVolts from '@repo/admin/components/pages/main/mentor/volt/ExchangeVolts';

export default async function Page() {
  const mentorVoltList: mentorVoltListDataType = await GetMentorVolts();
  return (
    <>
      {mentorVoltList && (
        <section className="w-full">
          <ReceivedVolts mentorVoltList={mentorVoltList} />
          <ExchangeVolts mentorVoltList={mentorVoltList} />
        </section>
      )}
    </>
  );
}

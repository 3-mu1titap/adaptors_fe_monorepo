import { GetMentorVolts } from '@repo/admin/actions/volt/voltAction';
import ReceivedVolts from '@repo/admin/components/pages/main/mentor/volt/ReceivedVolts';
import { mentorVoltListDataType } from '@repo/admin/components/types/main/mypage/myPageTypes';

export default async function Page() {
  const mentorVoltList: mentorVoltListDataType = await GetMentorVolts();
  console.log(mentorVoltList);
  return (
    <>{mentorVoltList && <ReceivedVolts mentorVoltList={mentorVoltList} />}</>
  );
}

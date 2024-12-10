import { GetMentorVolts } from '@repo/admin/actions/volt/voltAction';
import ReceivedVolts from '@repo/admin/components/pages/main/mentor/volt/ReceivedVolts';
import { mentorVoltListDataType } from '@repo/admin/components/types/main/mypage/myPageTypes';

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

export default async function Page() {
  const mentorVoltList: mentorVoltListDataType = await GetMentorVolts();
  return (
    <>{mentorVoltList && <ReceivedVolts mentorVoltList={mentorVoltList} />}</>
  );
}

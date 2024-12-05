import { GetMentorVolts } from '@repo/client/actions/volt/voltAction';
import ReceivedVolts from '@repo/client/components/pages/main/mentor/volt/ReceivedVolts';
import { mentorVoltListDataType } from '@repo/client/components/types/main/mypage/myPageTypes';

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

export default async function Page() {
  const mentorVoltList: mentorVoltListDataType = await GetMentorVolts(userUuid);
  return <ReceivedVolts mentorVoltList={mentorVoltList} />;
}

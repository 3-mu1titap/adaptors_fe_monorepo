import { getChatProfile } from '@repo/admin/actions/chatting/chattingAction';
import { GetTodayMentoringSessionList } from '@repo/admin/actions/schedule/scheduleAction';
import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import Meeting from '@repo/admin/components/pages/main/mentor/meeting/Meeting';
import { getDate } from '@repo/admin/components/utils/dateUtil';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: `Mentoring Meeting`,
};

// const mentoringSessionList = [
//   {
//     mentoringName: '프로그래밍 기초 멘토링',
//     sessionUuid: 'ac419217-cb98-4334-8b78-8126aa0e57aa',
//     startDate: '2024-12-04',
//     endDate: '2024-12-04',
//     startTime: {
//       hour: 9,
//       minute: 0,
//       second: 0,
//       nano: 0,
//     },
//     endTime: {
//       hour: 18,
//       minute: 0,
//       second: 0,
//       nano: 0,
//     },
//   },
//   {
//     mentoringName: '파이썬 기초 멘토링',
//     sessionUuid: 'ac419217-cb98-4334-8b78-8126aa0e57aa',
//     startDate: '2024-12-04',
//     endDate: '2024-12-04',
//     startTime: {
//       hour: 9,
//       minute: 0,
//       second: 0,
//       nano: 0,
//     },
//     endTime: {
//       hour: 18,
//       minute: 0,
//       second: 0,
//       nano: 0,
//     },
//   },
// ];

export default async function Page() {
  const mentoringSessionList = await GetTodayMentoringSessionList(
    getDate({ type: false })
  );
  console.log(mentoringSessionList);
  const session = await getServerSession(options);
  const user = session?.user;
  const userData = await getChatProfile({ userUuid: user.uuid });
  return (
    <>
      {/* <Meeting
        mentoringSessionList={mentoringSessionList}
        user={user}
        userData={userData}
      /> */}
    </>
  );
}

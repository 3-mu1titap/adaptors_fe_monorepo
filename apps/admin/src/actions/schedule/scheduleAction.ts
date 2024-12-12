'use server';

import {
  MentoringDataType,
  MentoringSessionDateDataType,
  TodayMentoringSessionDataType,
} from '@repo/admin/components/types/main/mentor/mentoringTypes';
import { redirect } from 'next/navigation';
import { UserScheduleDataType } from '../../components/types/main/schedule/scheduleTypes';
import { commonResType } from '../../components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

// 스케쥴 조회
export async function GetScheduleList({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.SCHEDULE_URL}/api/v1/schedule-read/schedule-list?startDate=${startDate}&endDate=${endDate}`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );
  if (!res.ok) {
    console.error('유저 스케쥴 리스트 조회 실패');
    return { userUuid: 'string', yearMonth: 'string', scheduleLists: [] };
  }

  const result = (await res.json()) as commonResType<UserScheduleDataType>;
  console.log(result);
  return result.result;
}

// 오늘 참여할 멘토링 세션 리스트 조회
export async function GetTodayMentoringSessionList(date: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.SCHEDULE_URL}/api/v1/schedule-read/today-mentoring-schedule-list?date=${date}`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('오늘 참여할 멘토링 리스트 조회 실패');
    return redirect(
      '/error?message=Failed to fetch today mentoring session list'
    );
  }

  const result = (await res.json()) as commonResType<
    TodayMentoringSessionDataType[]
  >;
  return result.result;
}

// sessionUuid로 mentoringUuid 조회하기
export async function GetMentoringUuid(sessionUuid: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/session-room/${sessionUuid}`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('멘토링 UUID 조회 실패');
    return redirect('/error?message=Failed to fetch mentoring UUID');
  }

  const result = (await res.json()) as MentoringDataType;
  return result.mentoringUuid;
}

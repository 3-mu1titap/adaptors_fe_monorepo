'use server';

import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import {
  AlarmPaginationType,
  AlarmType,
} from '@repo/admin/components/types/alarm/alarmTypes';
import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';

// 최신 알림 받아오기
export async function getRecentAlarmData() {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ALARM_URL}/api/v1/alarm-service/alarms/last?userUuid=${userUuid}`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!res.ok) {
    console.error('최신 알람 조회 실패');
    return null;
  }

  const result = (await res.json()) as commonResType<AlarmType>;
  return result.result;
}

// 알림 정보 받아오기
export async function getAlarmData({ page }: { page: number }) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ALARM_URL}/api/v1/alarm-service/alarms?page=${page}&size=10`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': userUuid,
      },
    }
  );
  if (!res.ok) {
    console.error('알람 조회 실패');
    return null;
  }

  const result = (await res.json()) as commonResType<AlarmPaginationType>;
  return result.result;
}

// 알림 삭제
export async function deleteAlarmData({ uuid }: { uuid: string }) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ALARM_URL}/api/v1/alarm-service/alarms/${uuid}`,
    {
      cache: 'no-cache',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': userUuid,
      },
    }
  );
  if (!res.ok) {
    console.error('알람 삭제 실패');
    return null;
  }

  return res.ok;
}

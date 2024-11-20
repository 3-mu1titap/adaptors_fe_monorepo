// 스케쥴 조회

import { UserScheduleDataType } from '../../components/types/main/schedule/scheduleTypes';
import { commonResType } from '../../components/types/ResponseTypes';

const userUuid = '671a55ae-2346-407f-85e3-9cd39f4e3d10';

export async function GetScheduleList(date: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL3}/api/v1/booking-schedule-read/schedule-list?userUuid=${userUuid}&yearMonth=${date}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<UserScheduleDataType>;
    return result.result;
  } catch (error) {
    console.error('유저 스케쥴 리스트 조회 실패 : ', error);
    return { userUuid: 'string', yearMonth: 'string', scheduleLists: [] };
  }
}

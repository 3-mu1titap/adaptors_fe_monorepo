'use server';

import { UserScheduleDataType } from '../../components/types/main/schedule/scheduleTypes';
import { commonResType } from '../../components/types/ResponseTypes';

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

// 스케쥴 조회
export async function GetScheduleList(date: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.SCHEDULE_URL}/api/v1/schedule-read/schedule-list?yearMonth=${date}`,
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

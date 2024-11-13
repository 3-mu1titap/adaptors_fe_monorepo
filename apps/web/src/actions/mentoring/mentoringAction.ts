'use server';

import { MentoringSessionDataType } from '../../components/types/mentoring/mentoringTypes';
import { commonResListType } from '../../components/types/ResponseTypes';

const memberUuid = '671a55ae-2346-407f-85e3-9cd39f4e3d10';
const mentoringUuid = '94f5e3e4-ccb8-4561-a48f-465d213ccce2';

// 멘토링의 정보 및 세션리스트 정보 조회
export async function GetMentoringSessionList() {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CATEGORY_URL}/api/v1/mentoring-query-service/session-list/${mentoringUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result =
      (await res.json()) as commonResListType<MentoringSessionDataType>;
    return result.result;
  } catch (error) {
    console.error('멘토링 세션 리스트 조회 : ', error);
    return [];
  }
}

'use server';

import {
  MentoringDataType,
  MentoringSessionDataType,
} from '../../components/types/mentoring/mentoringTypes';
import {
  commonResListType,
  commonResType,
} from '../../components/types/ResponseTypes';

const memberUuid = '671a55ae-2346-407f-85e3-9cd39f4e3d10';
const mentoringUuid = 'aed360d3-bd29-45cf-8895-efe801135746';

// 멘토링의 정보 및 세션리스트 정보 조회
export async function GetMentoringSessionList() {
  'use server';
  try {
    const res = await fetch(
      `http://10.10.10.158:9001/api/v1/mentoring-query-service/session-list?mentoringUuid=${mentoringUuid}`,
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
    console.log(result.result);
    return result.result;
  } catch (error) {
    console.error('멘토링 세션 리스트 조회 : ', error);
    return [];
  }
}
export async function GetMentoringInfo() {
  'use server';
  try {
    const res = await fetch(
      `http://10.10.10.158:9001/api/v1/mentoring-query-service/mentoring/${mentoringUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<MentoringDataType>;
    return result.result;
  } catch (error) {
    console.error('멘토링 정보조회 : ', error);
    return null;
  }
}

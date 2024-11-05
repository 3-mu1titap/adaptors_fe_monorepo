'use server';

import {
  MentoringDataType,
  MentoringSessionDataType,
} from '../../components/types/main/mentor/mentoringTypes';
import { commonResListType } from '../../components/types/ResponseTypes';

const memberUuid = '491a572d-1cd1-4ecb-90f4-e37399724f7f';

export async function GetMentoringList() {
  'use server';
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/mentoring-read/mentoring-list/${memberUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResListType<MentoringDataType>;
    return result.result;
  } catch (error) {
    console.error('멘토링리스트 정보 조회 : ', error);
    return [];
  }
}

export async function GetMentoringSessionList({
  mentoringUuid,
}: {
  mentoringUuid: string;
}) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/mentoring-read/session-list/${mentoringUuid}`,
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
    console.error('멘토링 세션 리스트 정보 조회 : ', error);
    return [];
  }
}

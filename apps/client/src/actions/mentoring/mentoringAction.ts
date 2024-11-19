'use server';

import { MentoringAddForm } from '../../components/form/MentoringAddForm';
import {
  MentoringDataType,
  MentoringSessionDataType,
  MiddleCategoryDataType,
  SessionTimeDataType,
  SessionTimeValidationType,
  TopCategoryDataType,
} from '../../components/types/main/mentor/mentoringTypes';
import {
  commonResListType,
  commonResType,
} from '../../components/types/ResponseTypes';

const memberUuid = '671a55ae-2346-407f-85e3-9cd39f4e3d10';

// 멘토링 대 카테고리 리스트 조회
export async function GetTopCategoryList() {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CATEGORY_URL}/api/v1/category/top-categories`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResListType<TopCategoryDataType>;
    return result.result;
  } catch (error) {
    console.error('대 카테고리 리스트 조회 : ', error);
    return [];
  }
}

// 멘토링 중 카테고리 리스트 조회
export async function GetMiddleCategoryList({
  topCategoryCode,
}: {
  topCategoryCode: string;
}) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CATEGORY_URL}/api/v1/category/middle-categories${topCategoryCode}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result =
      (await res.json()) as commonResListType<MiddleCategoryDataType>;
    return result.result;
  } catch (error) {
    console.error('중 카테고리 리스트 조회 : ', error);
    return [];
  }
}

// 멘토의 멘토링 생성
export async function PostMentoring(payload: MentoringAddForm) {
  'use server';
  try {
    const res = await fetch(`${process.env.LOCAL_URL2}/api/v1/mentoring`, {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = (await res.json()) as commonResListType<null>;
    console.log('멘토링 생성 성공', result);
    return result;
  } catch (error) {
    console.error('멘토링 생성 실패 : ', error);
    return [];
  }
}

// 멘토의 멘토링 리스트 조회
export async function GetMentoringList() {
  'use server';
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/v1/mentoring-query-service/mentoring-list/${memberUuid}`,
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

// 멘토링의 세션리스트 조희
export async function GetMentoringSessionList({
  mentoringUuid,
}: {
  mentoringUuid: string;
}) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/v1/mentoring-query-service/session-list/${mentoringUuid}`,
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

// 멘토링 세션 추가 시 시간이 스케쥴과 겹치는지 확인하는 API
export async function PostSessionTimeValidation({
  time,
}: {
  time: SessionTimeDataType;
}) {
  'use server';
  console.log(time);
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL2}/api/v1/mentoring-service/validate-session-time?startDate=${time.startDate}&endDate=${time.endDate}&startTime=${time.startTime}&endTime=${time.endTime}&mentorUuid=${memberUuid}`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result =
      (await res.json()) as commonResType<SessionTimeValidationType>;
    return result.result;
  } catch (error) {
    console.error('세션 시간 검증 : ', error);
    return null;
  }
}

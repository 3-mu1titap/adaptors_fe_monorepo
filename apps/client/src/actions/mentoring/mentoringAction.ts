'use server';

import {
  MentoringAddFormType,
  MentoringDataType,
  MentoringSessionDataType,
  MiddleCategoryDataType,
  SessionTimeDataType,
  SessionTimeValidationType,
  TopCategoryDataType,
} from '@repo/client/components/types/main/mentor/mentoringTypes';
import { commonResType } from '@repo/client/components/types/ResponseTypes';
import { redirect } from 'next/navigation';

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

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

    const result = (await res.json()) as commonResType<TopCategoryDataType[]>;
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

    const result = (await res.json()) as commonResType<
      MiddleCategoryDataType[]
    >;
    return result.result;
  } catch (error) {
    console.error('중 카테고리 리스트 조회 : ', error);
    return [];
  }
}

// 멘토의 멘토링 생성
export async function PostMentoring(payload: MentoringAddFormType) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.MENTORING_URL}/api/v1/mentoring-service`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
        body: JSON.stringify(payload),
      }
    );
    const result = (await res.json()) as commonResType<null>;
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
      `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/mentoring-list`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
      }
    );
    console.log(res);

    const result = (await res.json()) as commonResType<MentoringDataType[]>;
    return result.result;
  } catch (error) {
    console.error('멘토링리스트 정보 조회 : ', error);
    return [];
  }
}

// 멘토링 1개에 대한 정보 조회
export async function GetMentoringInfo(mentoringUuid: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/mentoring/${mentoringUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<MentoringDataType>;
    return result.result;
  } catch (error) {
    console.error('멘토링 세션 리스트 정보 조회 : ', error);
    return redirect('/error?message=Failed to fetch session list');
  }
}

// 멘토링의 세션리스트 조희
export async function GetMentoringSessionList(mentoringUuid: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/session-list?mentoringUuid=${mentoringUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<
      MentoringSessionDataType[]
    >;
    console.log(result);
    return result.result;
  } catch (error) {
    console.error('멘토링 세션 리스트 정보 조회 : ', error);
    return redirect('/error?message=Failed to fetch session list');
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
      `${process.env.MENTORING_URL}/api/v1/mentoring-service/validate-session-time?startDate=${time.startDate}&endDate=${time.endDate}&startTime=${time.startTime}&endTime=${time.endTime}&mentorUuid=${userUuid}`,
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

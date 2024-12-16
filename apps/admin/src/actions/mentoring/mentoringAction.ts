'use server';

import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import type {
  HashtagDataType,
  MentoringAddFormType,
  MiddleCategoryDataType,
  SessionTimeDataType,
  SessionTimeValidationType,
  TopCategoryDataType,
} from '@repo/admin/components/types/main/mentor/mentoringTypes';
import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import {
  MentoringDataType,
  MentoringResult,
  SearchMentoringListType,
} from '@repo/ui/types/CommonType.ts';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';
import { MentoringSession } from '@repo/admin/components/pages/main/home/SessionAddModal';

// 멘토링 대 카테고리 리스트 조회
export async function GetTopCategoryList() {
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

  if (!res.ok) {
    console.error('대 카테고리 리스트 조회 실패');
    return [];
  }

  const result = (await res.json()) as commonResType<TopCategoryDataType[]>;
  return result.result;
}

// 멘토링 중 카테고리 리스트 조회
export async function GetMiddleCategoryList({
  topCategoryCode,
}: {
  topCategoryCode: string;
}) {
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

  if (!res.ok) {
    console.error('중 카테고리 리스트 조회 실패');
    return [];
  }

  const result = (await res.json()) as commonResType<MiddleCategoryDataType[]>;
  return result.result;
}

// 멘토링 해시태그 리스트 출력
export async function GetHashTagsList() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/hashtag-service/api/v1/admin/hashtag`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    console.error('해시태그 조회 실패');
    return [];
  }

  const result = (await res.json()) as commonResType<HashtagDataType[]>;
  return result.result;
}

// 멘토의 멘토링 생성
export async function PostMentoring({
  payload,
}: {
  payload: MentoringAddFormType;
}) {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.MENTORING_URL}/api/v1/mentoring-service`,
    {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
      body: JSON.stringify(payload),
    }
  );
  if (!res.ok) {
    console.error('멘토링 생성 실패');
    return res.ok;
  }

  const result = (await res.json()) as commonResType<null>;
  revalidateTag('createMentoring');
  return res.ok;
}

// 멘토의 멘토링 일괄 생성
export async function PostMentoringSession({
  payload,
}: {
  payload: MentoringSession;
}) {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.MENTORING_URL}/api/v1/mentoring-service/batch-session`,
    {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
      body: JSON.stringify(payload),
    }
  );
  console.log(res);
  if (!res.ok) {
    console.error('멘토링 세션 일괄 생성 실패');
    return res.ok;
  }

  const result = (await res.json()) as commonResType<number>;
  console.log(result);
  revalidateTag('createMentoringSession');
  return result.result;
}

// 멘토의 멘토링 리스트 조회
export async function GetMentoringList(): Promise<MentoringDataType[]> {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/mentoring-list?isMentor=true`,
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
    console.error('멘토링 리스트 조회 실패');
    return [];
  }

  const result = (await res.json()) as commonResType<MentoringDataType[]>;
  return result.result;
}

export async function GetMentoringListByMentor(): Promise<
  SearchMentoringListType[]
> {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/mentoring-list?isMentor=true`,
    {
      cache: 'no-cache',
      method: 'GET',
      next: { tags: ['createMentoring'] },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('멘토링 리스트 조회 실패');
    return [];
  }

  const result = (await res.json()) as commonResType<SearchMentoringListType[]>;
  return result.result;
}

// 멘토링 1개에 대한 정보 조회
export async function GetMentoringInfo(mentoringUuid: string) {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/mentoring/${mentoringUuid}`,
    {
      cache: 'no-cache',
      method: 'GET',
      next: { tags: ['createMentoringSession'] },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('멘토링 세션 리스트 정보 조회 실패');
    return redirect('/error?message=Failed to fetch session list');
  }

  const result = (await res.json()) as commonResType<MentoringDataType>;
  return result.result;
}

// 멘토링의 세션 리스트 조회
export async function GetMentoringSessionList(
  mentoringUuid: string
): Promise<MentoringResult[]> {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.MENTORING_QUERY_URL}/api/v1/mentoring-query-service/session-list?mentoringUuid=${mentoringUuid}`,
    {
      cache: 'no-cache',
      method: 'GET',
      next: { tags: ['createMentoringSession'] },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('멘토링 세션 리스트 정보 조회 실패');
    return redirect('/error?message=Failed to fetch session list');
  }

  const result = (await res.json()) as commonResType<MentoringResult[]>;
  return result.result;
}

// 멘토링 세션 추가 시 시간이 스케쥴과 겹치는지 확인하는 API
export async function PostSessionTimeValidation({
  time,
}: {
  time: SessionTimeDataType;
}) {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  const res = await fetch(
    `${process.env.MENTORING_URL}/api/v1/mentoring-service/validate-session-time?startDate=${time.startDate}&endDate=${time.endDate}&startTime=${time.startTime}&endTime=${time.endTime}&mentorUuid=${userUuid}`,
    {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
    }
  );

  if (!res.ok) {
    console.error('세션 시간 검증 실패');
    return null;
  }

  const result = (await res.json()) as commonResType<SessionTimeValidationType>;
  return result.result;
}

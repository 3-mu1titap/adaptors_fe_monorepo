'use server';

import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { options } from '../../app/api/auth/[...nextauth]/options';
import {
  ApiResponse,
  MentoringDataType,
  MentoringResult,
  SearchMentoringListType,
  SessionCancelType,
  SessionRequestType,
  pageableType,
} from '../../components/types/mentoring/mentoringTypes';
import { commonResType } from '../../components/types/ResponseTypes';
// 멘토링의 정보 및 세션리스트 정보 조회
export async function GetMentoringSessionList(
  mentoringUuid: string
): Promise<MentoringResult[] | []> {
  'use server';
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/mentoring-query-service/api/v1/mentoring-query-service/session-list?mentoringUuid=${mentoringUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': menteeUuid,
        },
        next: { tags: ['session-request'] },
      }
    );
    const result = (await res.json()) as commonResType<MentoringResult[]>;
    // console.log('멘토링 세션 리스트 조회 : ', result);
    return result.result;
  } catch (error) {
    console.error('멘토링 세션 리스트 조회 : ', error);
    return [];
  }
}

//멘토링 overview 정보 가져오기
export async function GetMentoringInfo(mentoringUuid: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/mentoring-query-service/api/v1/mentoring-query-service/mentoring/${mentoringUuid}`,
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

//멘토링 참가신청
export async function SessionRequest(request: SessionRequestType) {
  'use server';
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;
  // const menteeUuid = 'b82f9e78-e96f-4b1c-9481-c587236f7d8f';
  console.log('request: ', request, 'menteeUuid', menteeUuid);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/session-request-service/api/v1/session-request-service`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': menteeUuid,
        },
        body: JSON.stringify(request),
      }
    );
    const result = (await res.json()) as commonResType<any>;
    console.log('멘토링 신청하기 result: ', result);
    if (result.HttpStatus == '200') {
      revalidateTag('session-request');
    }
    return result.code;
  } catch (error) {
    console.error('멘토링 신청하기: ', error);
    return null;
  }
}
//멘토링 참가 취소
export async function SessionCancel(request: SessionCancelType) {
  'use server';
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;
  // const menteeUuid = 'b82f9e78-e96f-4b1c-9481-c587236f7d8f';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/session-request-service/api/v1/session-request-service`,
      {
        cache: 'no-cache',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': menteeUuid,
        },
        body: JSON.stringify(request),
      }
    );
    const result = (await res.json()) as commonResType<any>;
    if (result.HttpStatus == '200') {
      revalidateTag('session-request');
    }
    return result.code;
  } catch (error) {
    console.error('멘토링 신청하기: ', error);
    return null;
  }
}

//멘토링 이름으로 멘토링 검색API
export async function GetMentoringNameSearch(
  name: string,
  page: number
): Promise<{
  content: SearchMentoringListType[];
  pageable: pageableType;
} | null> {
  'use server';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/mentoring-query-service/api/v1/mentoring-query-service/mentoring-list-pagination/${name}?page=${page}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<ApiResponse>;
    // console.log(result, '검색 api 연결 성공!!~~~~~~~~~~~~~');
    return result.result;
  } catch (error) {
    console.error('멘토링에 대한 검색 결과 리스트 조회: ', error);
    return null;
  }
}

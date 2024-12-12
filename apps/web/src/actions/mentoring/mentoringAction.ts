'use server';
import {
  MentoringDataType,
  MentoringResult,
} from '@repo/ui/types/CommonType.ts';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { options } from '../../app/api/auth/[...nextauth]/options';
import {
  ApiResponse,
  Mentoring,
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
  console.log('token :', session?.user.accessToken);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/session-list?mentoringUuid=${mentoringUuid}`,
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
    return result.result;
  } catch (error) {
    console.error('멘토링 세션 리스트 조회 : ', error);
    return [];
  }
}

//멘토링 overview 정보 가져오기
export async function GetMentoringInfo(
  mentoringUuid: string
): Promise<MentoringDataType | null> {
  'use server';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/mentoring/${mentoringUuid}`,
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
  const nickName = session?.user.nickName;
  try {
    const res = await fetch(
      `${process.env.SESSION_REQUEST_URL}/api/v1/session-request-service`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': session?.user.uuid,
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify({
          nickName: nickName,
          volt: 100,
          request,
        }),
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
  try {
    const res = await fetch(
      `${process.env.SESSION_REQUEST_URL}/api/v1/session-request-service`,
      {
        cache: 'no-cache',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': menteeUuid,
          'Authorization': `Bearer ${session?.user.accessToken}`,
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
    console.error('멘토링 신청취소하기 에러: ', error);
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
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/mentoring-list-pagination/${name}?page=${page}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<ApiResponse>;
    return result.result;
  } catch (error) {
    console.error('멘토링에 대한 검색 결과 리스트 조회: ', error);
    return null;
  }
}

//인기 멘토링 조회
export async function GetPopularMentoringList(
  topCategoryCodeList: string
): Promise<Mentoring[] | null> {
  'use server';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/popular-mentoring-list?topCategoryCodeList=${topCategoryCodeList}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<Mentoring[]>;
    // console.log(result.result, '인기 멘토링에 대한 겸색 결과 리스트 조회');
    return result.result;
  } catch (error) {
    console.error('에러 조회: ', error);
    return null;
  }
}

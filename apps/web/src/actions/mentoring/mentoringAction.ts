'use server';

import {
  MentoringDataType,
  MentoringResult,
} from '@repo/ui/types/CommonType.ts';
import { mainIntroDataType } from '@repo/web/components/types/home/homeResponseType';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { options } from '../../app/api/auth/[...nextauth]/options';
import {
  Mentoring,
  SearchResult,
  SearchResults,
  SessionCancelType,
  SessionRequestType,
  MentoringContent,
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
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': menteeUuid,
        },
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
export async function SessionRequest(
  request: SessionRequestType
): Promise<number> {
  'use server';
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;
  const nickName = session?.user.nickName;
  const image = session?.user.profileImageUrl;
  try {
    const res = await fetch(
      `${process.env.SESSION_REQUEST_URL}/api/v1/session-request-service`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': menteeUuid,
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify({
          sessionUuid: request.sessionUuid,
          mentorUuid: request.mentorUuid,
          volt: 100,
          nickName: nickName,
          userImageUrl: image,
          mentoringName: request.mentoringName,
        }),
      }
    );
    const result = (await res.json()) as commonResType<any>;
    if (res.ok) {
      revalidateTag('session-request');
    }
    return result.code;
  } catch (error) {
    console.error('멘토링 신청하기: ', error);
    return 404;
  }
}
//멘토링 참가 취소
export async function SessionCancel(
  request: SessionCancelType
): Promise<number> {
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
    const result = (await res.json()) as commonResType<null>;
    if (res.ok) {
      revalidateTag('session-request');
    }
    return result.code;
  } catch (error) {
    console.error('멘토링 신청취소하기 에러: ', error);
    return 404;
  }
}

//멘토링 이름으로 멘토링 검색API
export async function GetMentoringNameSearch(
  name: string,
  page: number
): Promise<{
  spellingCorrection: string;
  searchResults: SearchResults;
} | null> {
  'use server';
  const word = name;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/mentoring-list-pagination/elasticsearch/${name}?word=${word}&page=${page}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<SearchResult>;

    // console.log(result, '-------------------------------------------------');
    return result.result;
  } catch (error) {
    // console.error('멘토링에 대한 검색 결과 리스트 조회: ', error);
    return null;
  }
}

//인기 멘토링 조회
export async function GetPopularMentoringList(
  topCategoryCodeList: string
): Promise<Mentoring[] | null> {
  'use server';
  const session = getServerSession(options);
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
    return result.result;
  } catch (error) {
    console.error('에러 조회: ', error);
    return null;
  }
}

//메인 멘토링 리스트 조회
export async function getMainMentoringList() {
  'use server';
  const session = getServerSession(options);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/main/list`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<mainIntroDataType[]>;
    // console.log(result);
    return result.result;
  } catch (error) {
    console.error('error: ', error);
    return null;
  }
}

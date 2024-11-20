'use server';

import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { options } from '../../app/api/auth/[...nextauth]/options';
import {
  MentoringDataType,
  MentoringSessionDataType,
  SessionCancelType,
  SessionRequestType,
} from '../../components/types/mentoring/mentoringTypes';
import {
  commonResListType,
  commonResType,
} from '../../components/types/ResponseTypes';

// 멘토링의 정보 및 세션리스트 정보 조회
export async function GetMentoringSessionList(mentoringUuid: string) {
  'use server';
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;
  const fetchURI = !menteeUuid ? `` : `&userUuid=${menteeUuid}`;
  console.log('실행됨');

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/mentoring-query-service/api/v1/mentoring-query-service/session-list?mentoringUuid=${mentoringUuid}${fetchURI}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { tags: ['mentoring-sessions-list'] },
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
  // const menteeUuid = session?.user.uuid;
  const menteeUuid = '123';

  try {
    const res = await fetch(
      `http://10.10.10.158:9004/api/v1/session-request-service`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionUuid: request.sessionUuid,
          menteeUuid: menteeUuid,
          mentoringName: request.mentoringName,
        }),
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
//멘토링 참가 취소
export async function SessionCancel(request: SessionCancelType) {
  'use server';
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/session-request-service/api/v1/session-request-service`,
      {
        cache: 'no-cache',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionUuid: request.sessionUuid,
          menteeUuid: menteeUuid,
          deadlineDate: request.deadlineDate,
        }),
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

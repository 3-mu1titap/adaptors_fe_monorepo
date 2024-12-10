'use server';

import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import { MentoringFeedbackType } from '@repo/admin/components/types/main/meeting/meetingTypes';
import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const nickName = '멘토';

// 화상회의, 채팅 참가하기
export async function postJoinMeeting(mentoringSessionUuid: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/join/${mentoringSessionUuid}?nickName=${nickName}`,
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
    console.log(res);
    return true;
  } catch (error) {
    return redirect('/error?message=Failed to post join');
  }
}

// 화상회의, 채팅 나가기
export async function postExitMeeting(mentoringSessionUuid: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/leave/${mentoringSessionUuid}?nickName=${nickName}`,
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
    console.log(res);
    return true;
  } catch (error) {
    return redirect('/error?message=Failed to post exit');
  }
}

// heartbeat 쏘기
export async function postHeartbeat(mentoringSessionUuid: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/heartbeat/${mentoringSessionUuid}?nickName=${nickName}`,
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
    return true;
  } catch (error) {
    return false;
  }
}

// 참가자 관리
export async function getParticipants(mentoringSessionUuid: string) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/getParticipants/${mentoringSessionUuid}`,
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
    const result = (await res.json()) as commonResType<string[]>;
    console.log('1111111111111111111111', mentoringSessionUuid);
    return result.result;
  } catch (error) {
    return redirect('/error?message=Failed to fetch participants');
  }
}

// 화상회의 종료 후 피드백 작성
export async function postFeedback(payload: MentoringFeedbackType) {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    // api 완성되면 넣기
    console.log(payload);
    // const res = await fetch(`${process.env}/api/v1/`, {
    //   cache: 'no-cache',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${accessToken}`,
    //     'userUuid': userUuid,
    //   },
    //   body: JSON.stringify({
    //     payload,
    //   }),
    // });
    return true;
  } catch (error) {
    return redirect('/error?message=Failed to post Feedback');
  }
}

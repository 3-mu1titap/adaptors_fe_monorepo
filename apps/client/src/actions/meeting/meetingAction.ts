'use server';

import { MentoringFeedbackType } from '@repo/client/components/types/main/meeting/meetingTypes';
import { commonResType } from '@repo/client/components/types/ResponseTypes';
import { redirect } from 'next/navigation';

const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';
const nickName = '멘토';

// 화상회의, 채팅 참가하기
export async function postJoinMeeting(mentoringSessionUuid: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/join/${mentoringSessionUuid}?nickName=${nickName}`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/leave/${mentoringSessionUuid}?nickName=${nickName}`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/heartbeat/${mentoringSessionUuid}?nickName=${nickName}`,
      {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
  try {
    const res = await fetch(
      `${process.env.CHATSERVICE_URL}/api/v1/chat/getParticipants/${mentoringSessionUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const result = (await res.json()) as commonResType<string[]>;
    console.log('1111111111111111111111', mentoringSessionUuid);
    return result.result;
  } catch (error) {
    return redirect('/error?message=Failed to fetch participants');
  }
}

// const APPLICATION_SERVER_URL =
//   'http://43.200.249.170:5555/api/v1/openvidu/generate-token';
const APPLICATION_SERVER_URL = 'http://localhost:6080';

// openvidu token 받아오기
export async function getOpenViduToken(
  roomName: string,
  participantName: string
) {
  'use server';
  const res = await fetch(`${APPLICATION_SERVER_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'userUuid': userUuid,
    },
    body: JSON.stringify({ roomName, participantName }),
  });
  if (!res.ok) {
    throw new Error('Failed to get token');
  }
  const { token } = await res.json();
  return token;
}

// 화상회의 종료 후 피드백 작성
export async function postFeedback(payload: MentoringFeedbackType) {
  'use server';
  try {
    // api 완성되면 넣기
    console.log(payload);
    // const res = await fetch(`${process.env}/api/v1/`, {
    //   cache: 'no-cache',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
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

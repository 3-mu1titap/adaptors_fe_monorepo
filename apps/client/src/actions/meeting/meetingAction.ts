'use server';

import { redirect } from 'next/navigation';
import { participantType } from '../../components/types/main/meeting/meetingTypes';
import { commonResType } from '../../components/types/ResponseTypes';

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
    console.log(mentoringSessionUuid, result);
    return result.result;
  } catch (error) {
    return redirect('/error?message=Failed to fetch participants');
  }
}

const APPLICATION_SERVER_URL = 'http://localhost:6080';
// openvidu token 받아오기
export async function getToken(roomName: string, participantName: string) {
  'use server';
  const res = await fetch(`${APPLICATION_SERVER_URL}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomName, participantName }),
  });
  if (!res.ok) {
    throw new Error('Failed to get token');
  }
  const { token } = await res.json();
  return token;
}

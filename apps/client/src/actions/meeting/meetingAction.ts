'use server';

import { participantsData } from '../../components/datas/main/meeting/participantsData';
import { participantType } from '../../components/types/main/meeting/meetingTypes';
import { commonResType } from '../../components/types/ResponseTypes';

export async function getParticipantsData() {
  'use server';
  const res: commonResType<participantType[]> = participantsData;
  return res.result;
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

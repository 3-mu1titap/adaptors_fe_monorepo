'use server';

import { options } from '@repo/admin/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

const OPENVIDU_SERVER_URL = process.env.NEXT_PUBLIC_OPENVIDU_SERVER_URL;
const OPENVIDU_NAME = process.env.NEXT_PUBLIC_OPENVIDU_NAME;
const OPENVIDU_KEY = process.env.NEXT_PUBLIC_OPENVIDU_KEY;

// Basic Auth 인코딩
const basicAuth = 'Basic ' + btoa(`${OPENVIDU_NAME}:${OPENVIDU_KEY}`);

const createToken = async (sessionId: string) => {
  const session = await getServerSession(options);
  const userUuid = session?.user.uuid;
  const response = await fetch(
    `${OPENVIDU_SERVER_URL}/api/v1/openvidu/session/${sessionId}/connection`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': userUuid, // Authorization 헤더 추가
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error creating token: ${response.statusText}`);
  }

  const data = await response.text();
  console.log('2222', data);
  return data; // The token
};

const createSession = async (sessionId: string) => {
  const response = await fetch(
    `${OPENVIDU_SERVER_URL}/api/v1/openvidu/session?mentoringSessionUuid=${sessionId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': basicAuth, // Authorization 헤더 추가
      },
      // body: JSON.stringify({ customSessionId: sessionId }),
    }
  );

  if (!response.ok) {
    throw new Error(`Error creating session: ${response.statusText}`);
  }

  const data = await response.text();
  console.log('11111', data);
  return data; // The sessionId
};

const getToken = async (mySessionId: string) => {
  const sessionId = await createSession(mySessionId);
  return await createToken(sessionId);
};

export default getToken;

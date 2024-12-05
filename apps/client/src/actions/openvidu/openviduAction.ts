const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

const username = 'OPENVIDUAPP';
const password = 'ADAPTORS_KEY';

// Base64로 인코딩된 인증 정보 생성
const encodedCredentials = btoa(`${username}:${password}`);

async function getSession(sessionId: string): Promise<string> {
  const response = await fetch(
    `https://adaptors.store:5443/api/sessions`, // 실제 API URL로 수정하세요
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`, // Authorization 헤더 설정
      },
      // body: JSON.stringify({ customSessionId: sessionId }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch session');
  }

  const data = await response.json();
  return data.sessionId;
}

async function createToken(sessionUuid: string): Promise<string> {
  const response = await fetch(
    `https://adaptors.store:5555/api/v1/openvidu/generate-token?mentoringSessionUuid=session1234`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': 'user1234',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to create token');
  }

  const data = await response.json();
  return data;
}

async function connectSession(sessionUuid: string): Promise<string> {
  const response = await fetch(
    `https://adaptors.store:5443/openvidu/api/sessions/${sessionUuid}/connection`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to create token');
  }

  const data = await response.json();
  return data;
}

// export async function getToken(sessionId: string): Promise<string> {
//   const sessionIdResponse = await getSession(sessionId);
//   console.log(sessionIdResponse);
//   return await createToken(sessionIdResponse);
// }

export async function getToken(sessionId: string): Promise<string> {
  const session = await getSession(sessionId);
  console.log(session);
  const token = await createToken(session);
  console.log('----', token);
  const connect = await connectSession(session);
  console.log('======', connect);
  return token;
}

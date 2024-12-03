const APPLICATION_SERVER_URL = process.env.OPENVIDU_URL;

async function getSession(sessionId: string): Promise<string> {
  const response = await fetch(`${APPLICATION_SERVER_URL}/api/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customSessionId: sessionId }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch session');
  }

  const data = await response.json();
  return data; // The sessionId
}

async function createToken(sessionId: string): Promise<string> {
  const response = await fetch(
    `${APPLICATION_SERVER_URL}/api/sessions/${sessionId}/connections`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to create token');
  }

  const data = await response.json();
  return data; // The token
}

export async function getToken(sessionId: string): Promise<string> {
  const sessionIdResponse = await getSession(sessionId);
  return await createToken(sessionIdResponse);
}

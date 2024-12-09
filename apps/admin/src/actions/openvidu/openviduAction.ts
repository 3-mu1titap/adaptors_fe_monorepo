const userUuid = 'eb5465c9-432f-49ee-b4d4-236b0d9ecdcb';

async function getSession(sessionId: string) {
  const response = await fetch(`http://43.200.249.170:4443/api/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      customSessionId: sessionId,
    }),
  });

  console.log(response);
  if (!response.ok) {
    throw new Error('Failed to fetch session');
  }

  const session = await response.text();
  return session;
}

async function createToken(sessionId: string) {
  const response = await fetch(
    `https://adaptors.store:4443/api/sessions/${sessionId}/connections`,
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

  const data = await response.text();
  return data;
}

export async function getToken(sessionId: string) {
  const session = await getSession(sessionId);
  console.log(session);
  const token = await createToken(session);
  console.log(token);
  return token;
}

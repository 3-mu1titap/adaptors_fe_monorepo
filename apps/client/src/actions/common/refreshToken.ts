//리프레시토큰
export const postRefreshToken = async (refreshToken: string, uuid: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth-service/api/v1/auth/refresh-access`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': refreshToken,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  const data = await response.json();

  return data; // 갱신된 토큰 데이터를 반환
};

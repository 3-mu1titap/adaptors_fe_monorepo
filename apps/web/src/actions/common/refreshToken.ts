export const refreshToken = async (refreshToken: string) => {
  console.log(refreshToken);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth-service/api/v1/auth/refresh-access`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshToken}`,
      },
    }
  );

  if (!response.ok) {
    console.log('refreshtoken로 요청 실패');
    const res = await response.json();
    console.log(res);
    throw new Error('Failed to refresh token');
  }

  const data = await response.json();
  console.log('refreshtoken 다시요청햇다', data);

  return data; // 갱신된 토큰 데이터를 반환
};

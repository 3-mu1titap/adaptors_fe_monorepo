import { commonResType } from '@repo/web/components/types/ResponseTypes';

interface refreshAcessType {
  accessToken: string;
}
export const refreshToken = async (refreshToken: string) => {
  console.log(refreshToken);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH}/api/v1/auth/refresh-access`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshToken}`,
      },
    }
  );

  if (!response.ok) {
    const res = await response.json();
    console.log(res);
    throw new Error('Failed to refresh token');
  }

  const data = (await response.json()) as commonResType<refreshAcessType>;

  return data.result; // 갱신된 토큰 데이터를 반환
};

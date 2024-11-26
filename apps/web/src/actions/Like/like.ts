'use server';

import { getServerSession } from 'next-auth';
import { options } from 'src/app/api/auth/[...nextauth]/options';
//좋아요
export const postLikeReaction = async (targetUuid: string): Promise<number> => {
  'use server';
  const session = await getServerSession(options);
  const uuid = session?.user.uuid;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/member-service/api/v1/member/${targetUuid}/reaction`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
      },
      body: JSON.stringify({
        type: true,
      }),
    }
  );
  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post hash tags');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  console.log('좋아요요청성공', data.code);
  return data.code;
};

//블랙리스트
export const postHateReaction = async (targetUuid: string): Promise<number> => {
  'use server';
  const session = await getServerSession(options);
  const uuid = session?.user.uuid;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/member-service/api/v1/member/${targetUuid}/reaction`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
      },
      body: JSON.stringify({
        type: false,
      }),
    }
  );
  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post hash tags');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data.code;
};

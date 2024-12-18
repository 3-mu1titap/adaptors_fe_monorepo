'use server';
import { commonResType } from '@repo/web/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { likeResType } from '@repo/web/components/types/like/likeType';
import { options } from 'src/app/api/auth/[...nextauth]/options';
import { BlakcListTargetType } from './../../components/types/mypage/blacklistType';
//좋아요
export const postLikeReaction = async (targetUuid: string): Promise<number> => {
  'use server';
  const session = await getServerSession(options);
  const uuid = session?.user.uuid;
  const response = await fetch(
    `${process.env.MEMBER_URL}/api/v1/member/${targetUuid}/reaction`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`,
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
  revalidateTag('likeStatus');
  console.log(data, 'agffff');
  return data.code;
};

//블랙리스트
// export const postHateReaction = async (targetUuid: string): Promise<number> => {
//   'use server';
//   const session = await getServerSession(options);
//   const uuid = session?.user.uuid;
//   const response = await fetch(
//     `${process.env.MEMBER_URL}/api/v1/member/${targetUuid}/reaction`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${session?.user.accessToken}`,
//         'userUuid': uuid,
//       },
//       body: JSON.stringify({
//         type: false,
//       }),
//     }
//   );
//   // 서버 응답 처리
//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.message || 'Failed to post hash tags');
//   }

//   // 서버에서 받은 데이터 반환
//   const data = await response.json();
//   return data.code;
// };

// export async function GetMentorBlacklist() {
//   'use server';
//   const session = await getServerSession(options);
//   const uuid = session?.user.uuid;
//   try {
//     const res = await fetch(
//       `${process.env.MEMBER_URL}/api/v1/member/black/targetUuid`,
//       {
//         cache: 'no-cache',
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${session?.user.accessToken}`,
//           'userUuid': uuid,
//         },
//       }
//     );

//     const result = (await res.json()) as commonResType<BlakcListTargetType[]>;
//     revalidateTag('likeStatus');
//     return result.result;
//   } catch (error) {
//     console.log('블랙리스트 멘토 Uuid 조회', error);
//     return null;
//   }
// }

//타겟 좋아요 유무 조회
export async function getIsLiked(targetUuid: string): Promise<boolean> {
  'use server';
  const session = await getServerSession(options);
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.MEMBER_URL}/api/v1/member/${targetUuid}/like`,
      {
        cache: 'force-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user.accessToken}`,
          'userUuid': userUuid,
        },
        next: {
          tags: ['likeStatus'],
        },
      }
    );

    const result = (await res.json()) as commonResType<boolean>;
    return result.result;
  } catch (error) {
    console.log('좋아요 유무 조회 error', error);
    return false;
  }
}

//관심목록 리스트 조회
export async function getLikeList(): Promise<likeResType[]> {
  'use server';
  const session = await getServerSession(options);
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(`${process.env.MEMBER_URL}/api/v1/member/like`, {
      cache: 'force-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.user.accessToken}`,
        'userUuid': userUuid,
      },
      next: {
        tags: ['likeStatus'],
      },
    });

    const result = (await res.json()) as commonResType<likeResType[]>;
    return result.result;
  } catch (error) {
    console.log('좋아요 유무 조회 error', error);
    return [];
  }
}

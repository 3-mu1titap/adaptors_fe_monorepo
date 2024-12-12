'use server';
import { Mentee } from '@repo/web/components/types/mentee/MenteeType';
import { userProfileType } from '@repo/web/components/types/profile/RequestType';
import { commonResType } from '@repo/web/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from 'src/app/api/auth/[...nextauth]/options';
export const getProfileImage = async (
  uuid: string
): Promise<userProfileType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PROFILE_URL}/api/v1/memberInfo/profileImage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
      },
      next: { tags: ['profileUpdate'] },
      cache: 'force-cache',
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post profile image');
  }

  const data = (await response.json()) as commonResType<userProfileType>;
  return data.result;
};

export const getMyProfileIamge = async (): Promise<userProfileType> => {
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PROFILE_URL}/api/v1/memberInfo/profileImage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': menteeUuid,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post profile image');
  }

  const data = (await response.json()) as commonResType<userProfileType>;
  return data.result;
};

// 멘티 정보 조회 API
export async function GetUserInfo() {
  'use server';
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PROFILE_URL}/api/v1/memberInfo/profile`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
        next: { tags: ['updateUserInfo'] },
      }
    );
    const result = (await res.json()) as commonResType<Mentee>;
    console.log(result.result, '유저 정보 조회');
    return result.result;
  } catch (error) {
    console.error('유저 정보 조회 : ', error);
    return redirect('/error?message=Failed to fetch userInfo');
  }
}

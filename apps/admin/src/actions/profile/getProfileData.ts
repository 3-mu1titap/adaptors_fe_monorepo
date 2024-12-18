'use server';

import { commonResType } from '@repo/admin/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { options } from 'src/app/api/auth/[...nextauth]/options';

export interface userProfileType {
  nickName: string;
  profileImageUrl: string;
}

export const getProfileImage = async (): Promise<userProfileType> => {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  const response = await fetch(
    `${process.env.MEMBER_QUERY_URL}/api/v1/memberInfo/profileImage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
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

export const getMyProfileImage = async (): Promise<userProfileType> => {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;
  const response = await fetch(
    `${process.env.MEMBER_QUERY_URL}/api/v1/memberInfo/profileImage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
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

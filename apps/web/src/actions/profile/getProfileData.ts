'use server';
import { commonResType } from '@components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
import { options } from 'src/app/api/auth/[...nextauth]/options';
interface userProfileType {
  nickName: string;
  profileImageUrl: string;
}

export const getProfileIamge = async (
  uuid: string
): Promise<userProfileType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/member-query-service/api/v1/memberInfo/profileImage`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
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

export const getMyProfileIamge = async (): Promise<userProfileType> => {
  const session = await getServerSession(options);
  const menteeUuid = session?.user.uuid;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/member-query-service/api/v1/memberInfo/profileImage`,
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

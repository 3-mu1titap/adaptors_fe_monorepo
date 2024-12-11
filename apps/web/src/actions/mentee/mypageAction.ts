'use server';
import { options } from '@repo/web/app/api/auth/[...nextauth]/options';
import { MenteeProfileEditFormType } from '@repo/web/components/types/mentee/MenteeType';
import { getServerSession } from 'next-auth';
import { uploadFileToS3 } from '../common/awsMediaUploader';
import { revalidateTag } from 'next/cache';

// 멘티 프로필 수정
async function PutUserMentorProfile(
  accessToken: string,
  userUuid: string,
  payload: any
) {
  'use server';
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MEMBER_URL}/api/v1/member/mentee/profile`,
    {
      cache: 'no-cache',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'userUuid': userUuid,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    console.error('멘티의 소개 수정 실패');
    return false;
  }
  return true;
}

// 유저 기본 정보 수정 API
async function PutUserBasicInfo(
  accessToken: string,
  userUuid: string,
  payload: any
) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH}/api/v1/auth/change-memberInfo`,
      {
        cache: 'no-cache',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
        body: JSON.stringify(payload),
      }
    );
    return true;
  } catch (error) {
    console.error('유저 기본 정보 수정 : ', error);
    return false;
  }
}

// 유저 프로필 수정
async function PutUserProfile(
  accessToken: string,
  userUuid: string,
  profileImageUrl: string
) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MEMBER_URL}/api/v1/member/profile-image`,
      {
        cache: 'no-cache',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
        body: JSON.stringify({
          profileImageUrl: profileImageUrl,
        }),
      }
    );
    return true;
  } catch (error) {
    console.error('멘티 프로필 수정 : ', error);
    return false;
  }
}

export async function PutUserTotalInfo({
  formData,
  imageFile = null,
}: {
  formData: MenteeProfileEditFormType;
  imageFile: File | null;
}) {
  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  const userUuid = session?.user.uuid;

  //회원정보수정
  const basicInfoPayload = {
    nickName: formData.nickName,
    phoneNumber: formData.phoneNumber,
  };

  //멘티 프로필 수정 데이터
  const userMenteeProfilePayload = {
    occupationStatus: formData.occupationStatus,
    educationLevel: formData.educationLevel,
    birthDate: '1998-04-28',
    gender: formData.gender,
    jobExperience: formData.jobExperience,
    jobType: formData.jobType,
    jobApplicationCount: formData.jobApplicationCount,
  };

  const menteeProfileSuccess = await PutUserMentorProfile(
    accessToken,
    userUuid,
    userMenteeProfilePayload
  );

  const basicInfoSuccess = await PutUserBasicInfo(
    accessToken,
    userUuid,
    basicInfoPayload
  );

  let profileSuccess = true;
  if (imageFile) {
    const profileImageUrl: string = await uploadFileToS3(imageFile, 'profile');
    profileSuccess = await PutUserProfile(
      accessToken,
      userUuid,
      profileImageUrl
    );
  }

  if (!basicInfoSuccess || !profileSuccess || menteeProfileSuccess) {
    console.error('유저 종합 정보 수정 중 오류 발생.');
    return false;
  }

  revalidateTag('updateUserInfo');
  return true;
}

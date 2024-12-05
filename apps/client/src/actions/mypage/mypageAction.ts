'use server';

import { Mentor } from '@repo/client/components/types/main/mentor/mentorTypes';
import { MentorProfileEditFormType } from '@repo/client/components/types/main/mypage/myPageTypes';
import { commonResType } from '@repo/client/components/types/ResponseTypes';
import { redirect } from 'next/navigation';
import { uploadFileToS3 } from '../common/awsMediaUploader';

// 유저 정보 조회 API
export async function GetUserInfo(userUuid: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.PROFILE_URL}/api/v1/memberInfo/profile`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
        next: { tags: ['updateUserInfo'] },
      }
    );
    const result = (await res.json()) as commonResType<Mentor>;
    return result.result;
  } catch (error) {
    console.error('유저 정보 조회 : ', error);
    return redirect('/error?message=Failed to fetch userInfo');
  }
}

// 유저 기본 정보 수정 API
async function PutUserBasicInfo(userUuid: string, payload: any) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.AUTH_URL}/api/v1/auth/change-memberInfo`,
      {
        cache: 'no-cache',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
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
async function PutUserProfile(userUuid: string, profileImageUrl: string) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.USER_URL}/api/v1/member/profile-image`,
      {
        cache: 'no-cache',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
        body: JSON.stringify({
          profileImageUrl: profileImageUrl,
        }),
      }
    );
    return true;
  } catch (error) {
    console.error('유저 프로필 수정 : ', error);
    return false;
  }
}

// 유저의 멘토 소개 수정
async function PutUserMentorProfile(userUuid: string, payload: any) {
  'use server';
  try {
    const res = await fetch(
      `${process.env.USER_URL}/api/v1/member/mentor/profile`,
      {
        cache: 'no-cache',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
        body: JSON.stringify(payload),
      }
    );
    return true;
  } catch (error) {
    console.error('유저의 멘토 소개 수정 : ', error);
    return false;
  }
}

export async function PutUserTotalInfo({
  formData,
  userUuid,
  imageFile = null,
}: {
  formData: MentorProfileEditFormType;
  userUuid: string;
  imageFile: File | null;
}) {
  const basicInfoPayload = {
    nickName: formData.nickName,
    phoneNumber: formData.phoneNumber,
  };
  const basicInfoSuccess = await PutUserBasicInfo(userUuid, basicInfoPayload);
  let profileSuccess = true;
  if (imageFile) {
    const profileImageUrl: string = await uploadFileToS3(imageFile, 'profile');
    profileSuccess = await PutUserProfile(userUuid, profileImageUrl);
  }
  const userMentorProfilePayload = {
    mentoringField: formData.mentoringField,
    age: formData.age,
    gender: formData.gender,
    jobExperience: formData.jobExperience,
  };
  const mentorProfileSuccess = await PutUserMentorProfile(
    userUuid,
    userMentorProfilePayload
  );

  if (!basicInfoSuccess || !profileSuccess || !mentorProfileSuccess) {
    console.error('유저 종합 정보 수정 중 오류 발생.');
    return false;
  }

  return true;
}

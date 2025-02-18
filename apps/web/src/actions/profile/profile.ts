'use server';
import {
  MenteeProfileRequestType,
  MentorProfileRequestType,
} from '../../components/types/profile/RequestType';

export const postMentorProfile = async ({
  profile,
  uuid,
}: {
  profile: MentorProfileRequestType;
  uuid: string;
}): Promise<any> => {
  'use server';
  const response = await fetch(
    `${process.env.MEMBER_URL}/api/v1/member/mentor/profile`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
      },
      body: JSON.stringify(profile),
    }
  );

  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post mentor profile');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data;
};

export const postMenteeProfile = async ({
  profile,
  uuid,
}: {
  profile: MenteeProfileRequestType;
  uuid: string;
}): Promise<any> => {
  const response = await fetch(
    `${process.env.MEMBER_URL}/api/v1/member/mentee/profile`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
      },
      body: JSON.stringify(profile), // profile을 JSON 형식으로 변환해서 보냄
    }
  );
  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post mentee profile');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data;
};

//프로필 이미지
export const uploadProfileIamge = async ({
  profileImage,
  uuid,
}: {
  profileImage: string;
  uuid: string;
}): Promise<any> => {
  const response = await fetch(
    `${process.env.MEMBER_URL}/api/v1/member/profile-image`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': '39a00bf5-c7fd-412d-8b70-933cfbfdb7fc',
      },
      body: JSON.stringify({ profileImageUrl: profileImage }),
    }
  );
  console.log(response);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '서버로 프로필 등록');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data;
};

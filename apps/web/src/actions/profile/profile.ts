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
  const response = await fetch(
    `${process.env.BACKEND_URL}/member-service/api/v1/member/mentor/profile`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Uuid': uuid,
      },
      body: JSON.stringify(profile), // profile을 JSON 형식으로 변환해서 보냄
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
    `${process.env.BACKEND_URL}/member-service/api/v1/member/mentee/profile`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Uuid': uuid,
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

export const uploadProfileIamge = async ({
  profileImage,
  uuid,
}: {
  profileImage: string;
  uuid: string;
}): Promise<any> => {
  const response = await fetch(
    `http://10.10.10.47:8081/api/v1/memberInfo/profileImage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Uuid': 'd5c0e498-ccc5-4480-919d-833411bd0a91',
      },
      body: JSON.stringify(profileImage), // profile을 JSON 형식으로 변환해서 보냄
    }
  );
  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post profile image');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data;
};

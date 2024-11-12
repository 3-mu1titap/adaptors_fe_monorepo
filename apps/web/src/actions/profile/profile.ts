'use server';
import {
  MenteeProfileRequestType,
  MentorProfileRequestType,
} from '../../components/types/profile/RequestType';
import { commonResType } from '../../components/types/ResponseTypes';
import { fetchData } from '../common/common';

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
  console.log(profile, uuid);
  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post mentee profile');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data;
};

export const profileImg = async (profileImageUrl: string): Promise<any> => {
  const data = await fetchData<commonResType<any>>({
    method: 'POST',
    apiUrl: `/api/v1/member/mentee/profile`,
    body: {
      profileImageUrl: profileImageUrl,
      thumbChecked: true,
      mediaType: 'IMAGE',
      mediaKind: 'PROFILE',
      mediaSeq: 1,
    },
  });
  return data;
};

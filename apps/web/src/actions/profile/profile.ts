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
  console.log(profile, uuid);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/member-service/api/v1/member/mentor/profile`,
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
    console.log('백엔드 Url', process.env.NEXT_PUBLIC_BACKEND_URL);
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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/member-service/api/v1/member/mentee/profile`,
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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/member-service/api/v1/memberInfo/profileImage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'userUuid': uuid,
      },
      body: JSON.stringify(profileImage),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to post profile image');
  }

  // 서버에서 받은 데이터 반환
  const data = await response.json();
  return data;
};

// export async function SessionRequest() {
//   'use server';
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/session-request-service/api/v1/session-request-service`,
//       {
//         cache: 'no-cache',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     const result = (await res.json()) as commonResType<any>;
//     return result.result;
//   } catch (error) {
//     console.error('멘토링 신청하기: ', error);
//     return null;
//   }
// }

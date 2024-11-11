'use server';
import { commonResType } from '../../components/types/ResponseTypes';
import { fetchData } from '../common/common';

//멘토 프로필 등록
export interface MentoProfile {
  mentoringField: string;
  age: number;
  gender: string;
  jobExperience: string;
}

// export const postMentorProfile = async (
//   profile: MentoProfile
// ): Promise<any> => {
//   const data = await fetchData<commonResType<any>>({
//     method: 'POST',
//     apiUrl: `/api/v1/member/mentor/profile`,
//     body: profile,
//   });
//   return data;
// };
// uuid 값을 가져오는 함수나 값
const uuid = '671a55ae-2346-407f-85e3-9cd39f4e3d10'; // 실제 uuid 값을 동적으로 가져오는 코드로 바꿀 수 있음

export const postMentorProfile = async (
  profile: MentoProfile
): Promise<any> => {
  const response = await fetch(
    'http://10.10.10.47:8082/api/v1/member/mentor/profile',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Uuid': uuid, // uuid 헤더 추가
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

//멘토 프로필 등록
type MenteeProfile = {
  occupationStatus: string;
  educationLevel: string;
  age: number;
  gender: 'FEMALE' | 'MALE';
  jobExperience: string;
  jobType: string;
  jobApplicationCount: number;
};

export const postMenteeProfile = async (
  profile: MenteeProfile
): Promise<any> => {
  const data = await fetchData<commonResType<any>>({
    method: 'POST',
    apiUrl: `/api/v1/member/mentee/profile`,
    body: profile,
  });
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

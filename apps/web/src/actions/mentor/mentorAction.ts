import { MentorBatchData } from '@repo/ui/types/batchDataType/MenterBatchData.ts';
import {
  BestMentorType,
  MentorListType,
} from '@repo/web/components/types/mentor/mentorType';
import { Mentoring } from '@repo/web/components/types/mentoring/mentoringTypes';
import { commonResType } from '../../components/types/ResponseTypes';
//멘토의 멘토링 리스트 조회
export async function GetMentorMentoringList(
  userUuid: string,
  isMentor: boolean
): Promise<Mentoring[]> {
  'use server';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/mentoring-list?isMentor=${isMentor}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<Mentoring[]>;

    return result.result;
  } catch (error) {
    console.error('멘토의 멘토링 리스트 조회 : ', error);
    return [];
  }
}

//멘토 프로필 소개글 조회

//베스트 멘토
export async function GetBestMentorList() {
  'use server';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BATCH_URL}/api/v1/adaptors-batch-service/mentor-overview/best-mentor-list?limit=${10}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<BestMentorType[]>;
    // console.log(result.result, '베스트 멘토 리스트 불러오기 성공');
    return result.result;
  } catch (error) {
    console.error('멘토의 멘토링 리스트 조회 : ', error);
    return [];
  }
}

//모든 멘토 리스트 조회
export async function GetMentorList() {
  'use server';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH}/api/v1/auth/mentor`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<MentorListType>;
    // console.log(result.result, '멘토 리스트 불러오기 성공');
    return result.result.mentorUuid;
  } catch (error) {
    console.error('error : ', error);
    return [];
  }
}

//멘토 집계 데이터 조회
export async function getMentorBatchData(
  userUuid: string
): Promise<MentorBatchData | null> {
  'use server';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BATCH_URL}/api/v1/adaptors-batch-service/mentor-overview/${userUuid}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': userUuid,
        },
      }
    );
    const result = (await res.json()) as commonResType<MentorBatchData>;
    // console.log(result, 'test 11111111');
    return result.result;
  } catch (error) {
    console.error('멘토의 집계 데이터 조회 : ', error);
    return null;
  }
}

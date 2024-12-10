import { MentorMentoringListDataType } from '@repo/web/components/types/mentor/mentorType';
import { commonResType } from '../../components/types/ResponseTypes';
//멘토의 멘토링 리스트 조회
export async function GetMentorMentoringList(
  userUuid: string,
  isMentor: boolean
) {
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
    const result = (await res.json()) as commonResType<
      MentorMentoringListDataType[]
    >;

    return result.result;
  } catch (error) {
    console.error('멘토의 멘토링 리스트 조회 : ', error);
    return [];
  }
}

//멘토 프로필 소개글 조회

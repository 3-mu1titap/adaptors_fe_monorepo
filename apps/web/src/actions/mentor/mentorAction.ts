import { MentorMentoringListDataType } from '@components/types/mentor/mentorType';
import { commonResType } from '../../components/types/ResponseTypes';
import { BestMentorType } from '@components/types/mentor/mentorType';
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

//베스트 멘토
export async function GetBestMentorList() {
  'use server';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BEST_MENTOR_URL}/api/v1/adaptors-batch-service/mentor-overview/best-mentor-list?limit=${10}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = (await res.json()) as commonResType<BestMentorType[]>;
    console.log(result.result, '베스트 멘토 리스트 불러오기 성공');
    return result.result;
  } catch (error) {
    console.error('멘토의 멘토링 리스트 조회 : ', error);
    return [];
  }
}

import { FeedbackElements } from '@repo/ui/types/Feedback.ts';
import { options } from '@repo/web/app/api/auth/[...nextauth]/options';
import { commonResType } from '@repo/web/components/types/ResponseTypes';
import { getServerSession } from 'next-auth';
//멘티 마이페이지에서 피드백 조회
export async function getFeedbackScore(categoryCode: string) {
  'use server';
  const session = await getServerSession(options);
  try {
    const res = await fetch(
      `${process.env.FEEDBACK_QUERY_URL}/api/v1/feedback-record/feedback-score/${categoryCode}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': session?.user.uuid,
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify({
          categoryCode,
        }),
      }
    );
    const result = (await res.json()) as commonResType<any>;
    console.log('멘티 마이페이지 피드백 조회 result: ', result);
    return result.code;
  } catch (error) {
    console.error('멘티 마이페이지 피드백 조회: ', error);
    return null;
  }
}

//피드백 그래프 조회
export async function getFeedbackGraph(categoryCode: string) {
  'use server';
  const session = await getServerSession(options);

  try {
    const res = await fetch(
      `${process.env.FEEDBACK_QUERY_URL}/api/v1/feedback-record/feedback-graph/${categoryCode}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': session?.user.uuid,
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify({
          categoryCode,
        }),
      }
    );
    const result = (await res.json()) as commonResType<any>;
    console.log('멘티 마이페이지 피드백 조회 result: ', result);
    return result.code;
  } catch (error) {
    console.error('멘티 마이페이지 피드백 조회: ', error);
    return null;
  }
}

//피드백 요소 조회
export async function getFeedbackElements(categoryCode: string) {
  'use server';
  const session = await getServerSession(options);

  try {
    const res = await fetch(
      `${process.env.FEEDBACK_QUERY_URL}/api/v1/feedback-record/feedback-graph/${categoryCode}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userUuid': session?.user.uuid,
          'Authorization': `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify({
          categoryCode,
        }),
      }
    );
    const result = (await res.json()) as commonResType<FeedbackElements>;
    console.log('멘티 마이페이지 피드백 조회 result: ', result);
    return result.code;
  } catch (error) {
    console.error('멘티 마이페이지 피드백 조회: ', error);
    return null;
  }
}

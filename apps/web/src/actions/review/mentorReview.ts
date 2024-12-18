'use server';
import { getServerSession } from 'next-auth';
import { options } from '@repo/web/app/api/auth/[...nextauth]/options';
import { Mentee } from '@repo/web/components/types/mentee/MenteeType';
import { commonResType } from '@repo/web/components/types/ResponseTypes';
import { RecentReviewResType } from '@repo/web/components/types/Review/ReviewType';
import { ResponseData } from '@repo/web/components/types/Review/ReviewType';
export async function getMentorReview(userUuid: string) {
  'use server';

  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REVIEW_QUERY_URL}/api/v1/reviewList/recent-review`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );

    const result = (await res.json()) as commonResType<RecentReviewResType[]>;
    return result.result;
  } catch (error) {
    console.log(error, '리뷰 조회 중 에러');
  }
}

export async function getMentorAllReview(userUuid: string, page: number) {
  'use server';

  const session = await getServerSession(options);
  const accessToken = session?.user.accessToken;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REVIEW_QUERY_URL}/api/v1/reviewList/recent-review/mentor?page=${page}&size=${20}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'userUuid': userUuid,
        },
      }
    );

    const result = (await res.json()) as commonResType<ResponseData>;
    return result.result;
  } catch (error) {
    console.log(error, '리뷰 조회 중 에러');
  }
}

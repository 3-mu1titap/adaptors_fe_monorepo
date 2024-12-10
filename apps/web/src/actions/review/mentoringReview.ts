import { commonResType } from '@repo/web/components/types/ResponseTypes';

// 리뷰조회
export const getReviewerProfile = async (
  mentoringUuid: string
): Promise<string[]> => {
  'use server';
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_REVIEW_QUERY_URL}/api/v1/reviewList/profile-image/${mentoringUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  // 서버 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '멘토링별 리뷰어 프로필사진');
  }

  // 서버에서 받은 데이터 반환
  const data = (await response.json()) as commonResType<string[]>;
  return data.result;
};

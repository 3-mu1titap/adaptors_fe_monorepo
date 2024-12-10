import { ReviewerProfileType } from '@repo/ui/types/ReviewType.ts';
import { commonResType } from '@repo/web/components/types/ResponseTypes';

// 리뷰어 프로필 조회
export const getReviewerProfile = async (
  mentoringUuid: string
): Promise<ReviewerProfileType[]> => {
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
  const data = (await response.json()) as commonResType<ReviewerProfileType[]>;
  return data.result;
};

export const getRevieweList = async (
  mentoringUuid: string
): Promise<string[]> => {
  'use server';
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_REVIEW_QUERY_URL}/api/v1/reviewList/review-list/${mentoringUuid}`,
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
    throw new Error(errorData.message || '리뷰 리스트 조회');
  }

  // 서버에서 받은 데이터 반환
  const data = (await response.json()) as commonResType<string[]>;
  return data.result;
};

export const getBestRevieweList = async (
  mentoringUuid: string
): Promise<string[]> => {
  'use server';
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_REVIEW_QUERY_URL}/api/v1/reviewList/best-review/${mentoringUuid}`,
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
    throw new Error(errorData.message || '리뷰 리스트 조회');
  }

  // 서버에서 받은 데이터 반환
  const data = (await response.json()) as commonResType<any>;
  return data.result;
};

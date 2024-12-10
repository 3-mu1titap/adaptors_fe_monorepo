import {
  Mentoring,
  MentoringListType,
} from '@repo/ui/types/MentoringListType.ts';
import { commonResType } from '@repo/web/components/types/ResponseTypes';

//카테고리로 멘토링리스트 조회
export async function GetMentoringByCategory({
  topCategoryCode,
  middleCategoryCode,
  bottomCategoryCode,
}: {
  topCategoryCode: string;
  middleCategoryCode?: string;
  bottomCategoryCode?: string;
}): Promise<Mentoring[]> {
  'use server';
  try {
    // QueryString 생성
    const queryParams = new URLSearchParams({
      topCategoryCode,
    });

    // 선택적 파라미터 추가
    if (middleCategoryCode) {
      queryParams.append('middleCategoryCode', middleCategoryCode);
    }

    if (bottomCategoryCode) {
      queryParams.append('bottomCategoryCode', bottomCategoryCode);
    }
    console.log(topCategoryCode);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/mentoring-pagination/by-category?${queryParams}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<MentoringListType>;
    return result.result.content;
  } catch (error) {
    console.error('멘토링에 대한 검색 결과 리스트 조회: ', error);
    return [];
  }
}

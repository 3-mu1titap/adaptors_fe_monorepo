import { MentoringListResult } from '@repo/ui/types/MentoringListType.ts';
import { commonResType } from '@repo/web/components/types/ResponseTypes';

//카테고리로 멘토링리스트 조회
export async function GetMentoringByCategory({
  topCategoryCode,
  middleCategoryCode,
  bottomCategoryCode,
  page,
  size,
  sort,
}: {
  topCategoryCode: string;
  middleCategoryCode?: string;
  bottomCategoryCode?: string;
  page: string;
  size: string;
  sort?: string[];
}): Promise<MentoringListResult | null> {
  'use server';
  try {
    // QueryString 생성
    // const queryParams = new URLSearchParams({
    //   topCategoryCode,
    // });

    // if (page) {
    //   queryParams.append('page', page);
    // }
    // if (size) {
    //   queryParams.append('size', size);
    // }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/mentoring-pagination/by-category?topCategoryCode=${topCategoryCode}&page=${parseInt(page) - 1}&size=${size ? size : 20}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<MentoringListResult>;
    return result.result;
  } catch (error) {
    console.error('멘토링에 대한 검색 결과 리스트 조회: ', error);
    return null;
  }
}

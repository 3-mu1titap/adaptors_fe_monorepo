import { SearchMentoringListType } from '@components/types/mentoring/mentoringTypes';
import { commonResType } from '@components/types/ResponseTypes';

//카테고리로 멘토링리스트 조회
export async function GetMentoringByCategory({
  topCategoryCode,
  middleCategoryCode,
  bottomCategoryCode,
}: {
  topCategoryCode: string;
  middleCategoryCode?: string;
  bottomCategoryCode?: string;
}): Promise<SearchMentoringListType[]> {
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

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/mentoring/by-category?${queryParams}`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = (await res.json()) as commonResType<
      SearchMentoringListType[]
    >;
    // console.log(result.result);
    return result.result;
  } catch (error) {
    console.error('멘토링에 대한 검색 결과 리스트 조회: ', error);
    return [];
  }
}

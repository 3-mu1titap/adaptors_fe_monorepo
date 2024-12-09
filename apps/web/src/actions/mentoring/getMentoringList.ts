import { commonResType } from '@components/types/ResponseTypes';
import { SearchMentoringListType } from '@repo/ui/types/CommonType.ts';
import { getServerSession } from 'next-auth';
import { options } from 'src/app/api/auth/[...nextauth]/options';

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
  const session = await getServerSession(options);
  const token = session?.user.acessToken;
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
      `${process.env.NEXT_PUBLIC_METORING_QUERY}/api/v1/mentoring-query-service/mentoring/by-category?${queryParams}`,
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
    return result.result;
  } catch (error) {
    console.error('멘토링에 대한 검색 결과 리스트 조회: ', error);
    return [];
  }
}

import { commonResType } from '@components/types/ResponseTypes';
interface Category {
  id: number;
  topCategoryCode: string;
  topCategoryName: string;
  categoryType: string | null; // categoryType이 null일 수 있기 때문에 null 타입 포함
}
export async function getTopCategoryList(): Promise<Category[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/category-service/api/v1/category/top-categories`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          tags: ['category-update'],
        },
      }
    );
    const result = (await res.json()) as commonResType<Category[]>;
    return result.result;
  } catch (error) {
    console.error('멘토링 신청하기: ', error);
    return [];
  }
}

import { TopCategoryType } from '@repo/ui/types/CommonType.js';
import { commonResType } from '@repo/web/components/types/ResponseTypes';

export async function getTopCategoryList(): Promise<TopCategoryType[]> {
  try {
    const res = await fetch(
      `${process.env.CATEGORY_URL}/api/v1/category/top-categories`,
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
    const result = (await res.json()) as commonResType<any>;

    console.log(result.result);
    return result.result;
  } catch (error) {
    console.error('카테고리 조회 에러: ', error);
    return [];
  }
}

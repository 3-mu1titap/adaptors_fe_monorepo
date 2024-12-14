import { TopCategoryType } from '@repo/ui/types/CommonType.js';
import { commonResType } from '@repo/web/components/types/ResponseTypes';

export async function getTopCategoryList(): Promise<TopCategoryType[]> {
  try {
    const res = await fetch(
      `${process.env.CATEGORY_URL}/api/v1/category/top-categories`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'force-cache',
      }
    );
    const result = (await res.json()) as commonResType<TopCategoryType[]>;
    // console.log(result.result);
    return result.result;
  } catch (error) {
    console.error('카테고리 조회 에러: ', error);
    return [];
  }
}

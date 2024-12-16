export interface mainIntroDataType {
  mentoringUuid: string;
  name: string;
  description: string;
  // totalReviewCount?: number;
  // reviewStarAvg?: number;
  // totalSaleCount?: number;
  // mentorUuid?: string;
  // thumbnailUrl: string;
  // isReusable?: boolean;
  // isDeleted?: boolean;
  // createdAt?: string;
  // updatedAt?: string;
  categoryList: Category[];
  hashTagList?: HashTag[];
  mainImageList: ImageList[];
}

export interface ImageList {
  url: string;
}
export interface HashTag {
  hashtagId: string;
  hashtagName: string;
}
export interface Category {
  topCategoryCode: string;

  topCategoryName: string;
}

export interface CategoryType {
  id: number;
  categoryName: string;
}

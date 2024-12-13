export interface mainIntroDataType {
  mentoringUuid: string;
  name: string;
  description: string;
  totalReviewCount: number;
  reviewStarAvg: number;
  totalSaleCount: number;
  mentorUuid: string;
  thumbnailUrl: string;
  isReusable: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  categoryList: Category[];
  hashTagList: HashTag[];
}
export interface HashTag {
  hashtagId: string;
  hashtagName: string;
}
export interface Category {
  topCategoryCode: string;
  middleCategoryCode: string | null;
  bottomCategoryCode: string | null;
  topCategoryName: string;
  middleCategoryName: string | null;
  bottomCategoryName: string | null;
}

export interface CategoryType {
  id: number;
  categoryName: string;
}

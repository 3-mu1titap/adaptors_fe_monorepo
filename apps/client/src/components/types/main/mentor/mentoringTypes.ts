export interface TopCategoryDataType {
  id: number;
  topCategoryCode: string;
  topCategoryName: string;
}

export interface MiddleCategoryDataType {
  middleCategoryCode: string;
  middleCategoryName: string;
}

export interface MentoringSessionDataType {
  startDate: Date;
  endDate: Date;
  startTime: Date;
  endTime: Date;
  deadlineDatetime: Date;
  minHeadCount: number;
  maxHeadCount: number;
  price: number;
}

export interface MentoringCategoryDataType {
  topCategoryName: string;
  middleCategoryName: string;
}

export interface MentoringDataType {
  id: string;
  mentoringId: string;
  mentoringUuid: string;
  name: string;
  detail: string;
  mentorUuid: string;
  thumbnailUrl: string;
  isReusable: boolean;
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
  mentoringCategoryList: MentoringCategoryDataType[];
}

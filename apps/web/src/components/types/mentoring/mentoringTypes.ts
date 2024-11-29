export interface TimeDataType {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface MentoringSessionDataType {
  sessionUuid: string;
  mentoringUuid: string;
  startDate: string;
  endDate: string;
  startTime: TimeDataType;
  endTime: TimeDataType;
  deadlineDate: string;
  minHeadCount: number;
  maxHeadCount: number;
  nowHeadCount: number;
  isParticipating: boolean;
  price: number;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MentoringDataType {
  mentoringUuid: string;
  name: string;
  detail: string;
  mentorUuid: string;
  thumbnailUrl: string;
  isReusable: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  categoryList: Category[];
}

export interface Category {
  topCategoryCode: string;
  middleCategoryCode: string;
  bottomCategoryCode: string | null;
  topCategoryName: string;
  middleCategoryName: string;
  bottomCategoryName: string | null;
}
export interface SessionRequestType {
  sessionUuid: string;
  mentoringName: string;
}
export interface SessionCancelType {
  sessionUuid: string;
  deadlineDate: string;
}

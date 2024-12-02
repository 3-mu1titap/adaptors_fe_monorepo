export interface TopCategoryDataType {
  id: number;
  topCategoryCode: string;
  topCategoryName: string;
}

export interface MiddleCategoryDataType {
  middleCategoryCode: string;
  middleCategoryName: string;
}

export interface HashtagDataType {
  name: string;
  hashtagId: number;
}

// 멘토링 세션 시간 정보
export interface SessionTimeDataType {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

// 멘토링 세션 시간 RESPONSE DATA 타입
export interface SessionTimeResType {
  startDate: string[];
  endDate: string[];
  startTime: string[];
  endTime: string[];
}

// 멘토링 세션 시간 검증 정보
export interface SessionTimeValidationType {
  isPossible: boolean;
  timeDuplicateResponse: SessionTimeResType | null;
}

// 멘토링 세션 정보
export interface MentoringSessionDataType extends SessionTimeDataType {
  deadlineDate: Date;
  minHeadCount: number;
  maxHeadCount: number;
  nowHeadCount: number;
  isParticipating: boolean;
  price: number;
}

// 멘토링 카테고리 정보
export interface MentoringCategoryDataType {
  topCategoryName: string;
  middleCategoryName: string;
}

// 멘토링 정보
export interface MentoringDataType {
  id: string;
  mentoringId: string;
  mentoringUuid: string;
  name: string;
  description: string;
  detail: string;
  mentorUuid: string;
  thumbnailUrl: string;
  isReusable: boolean;
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
  mentoringCategoryList: MentoringCategoryDataType[];
}

export interface MentoringCategory {
  topCategoryName: string;
  topCategoryCode: string;
}

export interface MentoringSession {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  deadlineDate: Date;
  minHeadCount: number;
  maxHeadCount: number;
  price: number;
}

// 멘토링 등록 form type
export interface MentoringAddFormType {
  name: string;
  description: string;
  detail: string;
  isReusable: boolean;
  thumbnailUrl: string;
  sessionList: MentoringSession[];
  categoryList: MentoringCategory[];
  hashtagList: HashtagDataType[];
}

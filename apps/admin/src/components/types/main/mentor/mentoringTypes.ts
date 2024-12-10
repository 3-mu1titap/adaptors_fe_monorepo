import { StringValidation } from 'zod';

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

export interface MentoringSessionDateDataType {
  totalCount: number;
  startDate: string;
  mentoringSessionResponseDtoList: MentoringSession[];
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

export interface SessionUser {
  userUuid: string | null;
  menteeImageUrl: string | null;
}

export interface MentoringSession {
  sessionUuid: string;
  mentoringUuid: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  deadlineDate: string;
  minHeadCount: number;
  maxHeadCount: number;
  nowHeadCount: number;
  isParticipating: boolean;
  price: number;
  isClosed: boolean;
  sessionUserList: SessionUser[];
}

export interface MentoringSessionDataType {
  totalCount: number;
  startDate: string;
  mentoringSessionResponseDtoList: MentoringSession[];
}

export interface TimeType {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface TodayMentoringSessionDataType {
  mentoringName: string;
  sessionUuid: string;
  startDate: string;
  endDate: string;
  startTime: TimeType;
  endTime: TimeType;
}

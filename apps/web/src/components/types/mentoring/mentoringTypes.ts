export interface SessionTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

// export interface MentoringSessionData {
//   sessionUuid: string;
//   mentoringUuid: string;
//   startDate: string;
//   endDate: string;
//   startTime: string; // "HH:mm:ss" 형식
//   endTime: string; // "HH:mm:ss" 형식
//   deadlineDate: string;
//   minHeadCount: number;
//   maxHeadCount: number;
//   nowHeadCount: number;
//   isParticipating: boolean;
//   price: number;
//   isClosed: boolean;
// }

// export type MentoringSessionList = Record<string, MentoringSessionData[]>;
export interface MentoringResponse {
  result: MentoringResult[];
}

export interface MentoringResult {
  totalCount: number;
  startDate: string;
  mentoringSessionResponseDtoList: MentoringSession[];
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

export interface SessionUser {
  userUuid: string | null;
  menteeImageUrl: string | null;
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

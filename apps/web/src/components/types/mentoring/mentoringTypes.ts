export interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface MentoringSessionDataType {
  sessionUuid: string;
  mentoringUuid: string;
  startDate: string; // 날짜는 string으로 전달됨 (예: "2024-11-13")
  endDate: string; // 날짜는 string으로 전달됨 (예: "2024-11-13")
  startTime: Time; // 시간 정보
  endTime: Time; // 종료 시간 정보
  deadlineDate: string; // 마감 날짜
  minHeadCount: number; // 최소 참여자 수
  maxHeadCount: number; // 최대 참여자 수
  nowHeadCount: number; // 현재 참여자 수
  isParticipating: boolean; // 참여 여부
  price: number; // 가격
  isClosed: boolean; // 세션 마감 여부
  createdAt: string; // 생성일 (ISO 8601 형식)
  updatedAt: string; // 수정일 (ISO 8601 형식)
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

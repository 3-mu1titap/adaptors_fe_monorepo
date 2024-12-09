export interface SessionTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
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
  // nickName: string;
}
export interface SessionCancelType {
  sessionUuid: string;
  deadlineDate: string;
}

export interface SearchMentoringListType {
  mentoringUuid: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  isAvailable: boolean;
  nowSessionCount: number;
}

export interface pageableType {
  pageNumber: number;
  pageSize: number;
  sort?: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset?: number;
  paged?: boolean;
  unpaged?: boolean;
}

// API 전체 응답 타입 정의
export interface ApiResponse {
  content: SearchMentoringListType[];
  pageable: pageableType;
}

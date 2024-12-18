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
  id: number;
}
export interface SessionRequestType {
  sessionUuid: string;
  mentoringName: string;
  mentorUuid: string;
  volt: number;
}
export interface SessionCancelType {
  sessionUuid: string;
  deadlineDate: string;
}

// 검색 res
export interface SearchResult {
  spellingCorrection: string;
  searchResults: SearchResults;
}

export interface SearchResults {
  content: MentoringContent[];
  pageable: Pageable;
  totalPages: number;
}
export interface MentoringContent {
  mentoringUuid: string;
  reviewCount: number;
  averageStar: number;
  totalSaleCount: number;
  name: string;
  description: string;
  thumbnailUrl: string;
  isAvailable: boolean;
  nowSessionCount: number;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
}

export interface Mentoring {
  mentoringUuid: string;
  reviewCount: number | null;
  averageStar: number | null;
  totalSaleCount: number | null;
  name: string;
  description: string;
  thumbnailUrl: string;
  isAvailable: boolean;
  nowSessionCount: number;
}

export interface Result {
  content: Mentoring[];
}

//세션 참가 resType
export interface MentoringSession {
  totalPages: 1;
  size: 10;
  content: MentoringSessionContent[];
  number: 1;
}

export interface MentoringSessionContent {
  mentoringName: string;
  sessionUuid: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  price: number;
  maxHeadCount: number | 0;
  minHeadCount: number | 0;
  nowHeadCount: number | 0;
  status: string;
  updatedAt: string;
}

export interface startTime {
  hour?: number; // undefined 허용
  minute?: number;
  second?: number;
  nano?: number;
}

export interface endTime {
  hour?: number;
  minute?: number;
  second?: number;
  nano?: number;
}

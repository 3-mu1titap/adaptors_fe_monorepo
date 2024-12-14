export interface Mentoring {
  mentoringUuid: string;
  reviewCount: number | null;
  averageStar: number | null;
  totalSaleCount: number | null;
  name: string;
  description: string;
  thumbnailUrl: string;
  isAvailable: boolean;
  nowSessionCount: number | null;
}

export interface Pageable {
  offset: number;
  sort: Sort;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface MentoringListResult {
  totalPages: number;
  totalElements: number;
  size: number;
  content: Mentoring[];
  number: number;
  sort: Sort;
  numberOfElements: number;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  empty: boolean;
}

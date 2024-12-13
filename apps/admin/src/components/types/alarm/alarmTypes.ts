export interface AlarmType {
  uuid: string;
  userUuid: string;
  message: string;
  alarmType: string;
  updatedAt: Date;
}

export interface AlarmPaginationType {
  content: AlarmType[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: [];
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: [];
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

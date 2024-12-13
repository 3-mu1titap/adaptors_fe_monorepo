export interface exchangeDataType {
  id: number;
  date: string;
  volt: number;
  status: string;
  money: number;
}

export interface settleListDataType {
  totalExchange: number;
  exchangeList: exchangeDataType[];
}

export interface settleDataType {
  mentorUuid: string;
  points: number;
  account: string;
  bankCode: string;
}

export interface mentorVoltDataType {
  id: number;
  volt: number;
  date: Date;
  sender: string;
}

export interface mentorVoltListDataType {
  totalVolt: number;
  voltList: mentorVoltDataType[];
}

export interface MentorProfileEditFormType {
  profileImageUrl: string;
  nickName: string;
  phoneNumber: string;
  mentoringField: string;
  age: number;
  gender: string;
  jobExperience: string;
}

export interface SessionHistoryType {
  mentoringName: string;
  sessionUuid: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  price: number;
  maxHeadCount: number;
  minHeadCount: number;
  nowHeadCount: number;
  status: string;
  updatedAt: Date;
}

export interface MentorSessionHistoryType {
  content: SessionHistoryType[];
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

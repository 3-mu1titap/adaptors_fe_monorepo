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

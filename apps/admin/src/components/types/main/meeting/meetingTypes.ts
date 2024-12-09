// 화상회의에 참가하는 사람들에 대한 데이터 타입
export interface participantType {
  userUuid: string;
  nickname: string;
  profileImageUrl: string;
}

export interface userType extends participantType {
  micOn: boolean;
  videoOn: boolean;
}

export type CategoryCodeType = string;

export interface CategoryElementsType {
  면접: string[];
  자기소개서: string[];
  이력서: string[];
  포트폴리오: string[];
}

export interface MentoringFeedbackType {
  mentorNickName: string;
  mentoringSessionUuid: string;
  categoryCode: CategoryCodeType;
  elements: Record<string, number>;
  content: string;
}

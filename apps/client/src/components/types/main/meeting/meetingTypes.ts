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

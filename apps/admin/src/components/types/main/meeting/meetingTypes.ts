// 화상회의에 참가하는 사람들에 대한 데이터 타입
export interface participantType {
  id: number;
  username: string;
  profile_image_url: string;
}

export interface userType extends participantType {
  micOn: boolean;
  videoOn: boolean;
}

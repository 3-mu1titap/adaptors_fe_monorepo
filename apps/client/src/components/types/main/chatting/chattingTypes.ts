// 채팅 조회 데이터 타입
export interface chatDataType {
  id: string;
  mentoringSessionUuid: string;
  memberUuid: string;
  message: string;
  messageType: 'TEXT' | 'MEDIA' | 'FILE' | 'NOTICE';
  mediaUrl: string;
  createdAt: Date;
  deleted: boolean;
}

// 채팅 생성 데이터 타입
export interface createChatDataType {
  mentoringSessionUuid: string;
  message: string;
  messageType: 'TEXT' | 'MEDIA' | 'FILE' | 'NOTICE';
  mediaUrl: string;
}

// 채팅 상대 이름, 이미지 데이터 타입
export interface chatMemberDataType {
  nickName: string;
  profileImageUrl: string;
}

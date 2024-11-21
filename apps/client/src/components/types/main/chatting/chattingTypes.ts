// 채팅 조회 데이터 타입
export interface chatDataType {
  id: string;
  mentoringSessionUuid: string;
  memberUuid: string;
  message: string;
  messageType: 'TEXT' | 'MEDIA' | 'FILE' | 'NOTICE';
  mediaUrl: string;
  createdAt: number[];
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

// 이전 채팅 내역 받아오는 데이터 타입
export interface prevChatResType {
  content: {
    content: chatDataType[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      pages: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  };
  hasNext: boolean;
}

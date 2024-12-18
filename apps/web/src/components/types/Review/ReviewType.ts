export interface RecentReviewResType {
  id: string;
  reviewRequestDto: reviewRequestDto;
  memberRequestDto: memberRequestDto;
}

export interface reviewRequestDto {
  reviewTitle: string;
  reviewComment: string;
  menteeUuid: string;
  mentorUuid: string;
  mentoringUuid: string;
  mentoringSessionUuid: string;
  score: number;
  wroteAt: string;
  deleted: boolean;
}

export interface memberRequestDto {
  nickName: string;
  profileImageUrl: string;
}

// reviewRequestDto 타입 정의
export interface ReviewRequestDto {
  reviewTitle: string; // 리뷰 제목
  reviewComment: string; // 리뷰 내용
  menteeUuid: string; // 멘티 UUID
  mentorUuid: string; // 멘토 UUID
  mentoringUuid: string; // 멘토링 UUID
  mentoringSessionUuid: string; // 멘토링 세션 UUID
  score: number; // 점수
  wroteAt: string; // 작성 날짜 (ISO 8601 형식)
  deleted: boolean; // 삭제 여부
}

// memberRequestDto 타입 정의
export interface MemberRequestDto {
  nickName: string; // 사용자 닉네임
  profileImageUrl: string; // 프로필 이미지 URL
}

// content 배열의 단일 항목 타입 정의
export interface ContentItem {
  id: string; // 리뷰 ID
  reviewRequestDto: ReviewRequestDto; // 리뷰 요청 정보
  memberRequestDto: MemberRequestDto; // 멤버 정보
}

// pageable 타입 정의
interface Pageable {
  pageNumber: number; // 현재 페이지 번호
  pageSize: number; // 페이지당 항목 수
}

// 전체 데이터 타입 정의
export interface ResponseData {
  content: ContentItem[]; // 리뷰 콘텐츠 리스트
  pageable: Pageable; // 페이징 정보
  totalPages: number; // 총 페이지 수
}

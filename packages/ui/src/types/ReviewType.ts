export interface ReviewerProfileType {
  nickname: string;
  userImageUrl: string;
}

export interface ReviewRequestDto {
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

export interface MemberRequestDto {
  nickName: string;
  profileImageUrl: string;
}

export interface Review {
  id: string;
  reviewRequestDto: ReviewRequestDto;
  memberRequestDto: MemberRequestDto;
}

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

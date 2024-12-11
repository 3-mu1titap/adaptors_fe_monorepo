export interface MentorMentoringListDataType {
  length: number;
  mentoringUuid: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  inAvailable: boolean;
  nowSessionCount: number;
}

export interface ContentOnlyResType {
  content: SearchMentoringType[];
}

export interface SearchMentoringType {
  mentoringUuid: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  isAvailable: boolean;
  nowSessionCount: number;
}

//베스트 멘토
export interface BestMentorType {
  mentorUuid: string;
  nickName: string;
  profileImageUrl: string;
  totalReviewCount: number;
  reviewStarAvg: number;
  totalLikeCount: number;
  totalSaleCount: number;
}

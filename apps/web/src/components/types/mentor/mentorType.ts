export interface MentorMentoringListDataType {
  mentoringUuid: string;
  reviewCount: number | null;
  averageStar: number | null;
  totalSaleCount: number | null;
  name: string;
  description: string;
  thumbnailUrl: string;
  isAvailable: boolean;
  nowSessionCount: number | null;
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

//모든 멘토 조회 res
export interface MentorListType {
  mentorUuid: string[];
}

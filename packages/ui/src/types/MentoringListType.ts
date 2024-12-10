export interface Mentoring {
  mentoringUuid: string;
  reviewCount: number | null;
  averageStar: number | null;
  totalSaleCount: number | null;
  name: string;
  description: string;
  thumbnailUrl: string;
  isAvailable: boolean;
  nowSessionCount: number;
}

export interface MentoringListType {
  content: Mentoring[];
}

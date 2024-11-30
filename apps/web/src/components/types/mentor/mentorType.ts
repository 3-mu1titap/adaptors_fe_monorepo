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

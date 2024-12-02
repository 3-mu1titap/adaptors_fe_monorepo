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
  content: MentorMentoringListDataType[];
}

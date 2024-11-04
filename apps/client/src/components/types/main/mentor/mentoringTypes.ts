export interface MentoringSessionDataType {
  startDate: Date;
  endDate: Date;
  startTime: Date;
  endTime: Date;
  deadline_datetime: Date;
  minHeadCount: number;
  maxHeadCount: number;
  price: number;
}

export interface MentoringDataType {
  id: string;
  mentoringId: string;
  mentoringUuid: string;
  name: string;
  detail: string;
  mentorUuid: string;
  thumbnailUrl: string;
  isReusable: boolean;
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

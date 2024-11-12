export interface MentoringSessionDataType {
  sessionUuid: string;
  mentoringUuid: string;
  startDate: Date;
  endDate: Date;
  startTime: Date;
  endTime: Date;
  deadlineDatetime: Date;
  minHeadCount: number;
  maxHeadCount: number;
  price: number;
  isClosed: boolean;
}

export interface ScheduleDataType {
  mentoringSessionUuid: string;
  mentoringName: string;
  startDate: Date;
  startTime: Date;
  endDate: Date;
  endTime: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserScheduleDataType {
  userUuid: string;
  yearMonth: string;
  scheduleLists: ScheduleDataType[];
}

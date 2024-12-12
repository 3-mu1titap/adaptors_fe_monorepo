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
  scheduleLists: ScheduleDataType[];
}

export interface MentoringDataType {
  mentoringUuid: string;
  mentoringName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

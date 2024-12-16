export interface commonResType<T> {
  httpStatus: string;
  isSuccess: boolean;
  code: number;
  message: string;
  result: T;
}

export interface commonRes {
  httpStatus: string;
  isSuccess: boolean;
  code: number;
  message: string;
  result: number;
}

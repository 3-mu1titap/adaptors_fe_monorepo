export interface commonResType<T> {
  httpStatus: string;
  isSuccess: boolean;
  code: number;
  message: string;
  result: T;
}

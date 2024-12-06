export interface commonResType<T> {
  HttpStatus: string;
  isSuccess: boolean;
  code: number;
  message: string;
  result: T;
}

export interface commonRes {
  HttpStatus: string;
  isSuccess: boolean;
  code: number;
  message: string;
  result: number;
}

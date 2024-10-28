export interface commonResType<T> {
  HttpStatus: string;
  isSuccess: boolean;
  code: number;
  message: string;
  result: T[];
}

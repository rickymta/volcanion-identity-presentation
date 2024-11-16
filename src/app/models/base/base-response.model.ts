export interface BaseResponseModel<T> {
  succeeded: boolean;
  statusCodes: number;
  errorCode: number;
  data: T;
}

export interface ErrorResponseModel {
  errorCode: number;
  errorStatus: string;
  errorMessage: string;
  errorDetails?: string;
  stackTrace?: string | null;
}

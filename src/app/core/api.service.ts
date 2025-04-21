import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResponseModel, ErrorResponseModel } from '../models/base/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string = 'https://localhost:7258/api/v1';

  constructor(private http: HttpClient) {}

  private getHeaders(): { [header: string]: string } {
    const token = localStorage.getItem('accessToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private handleResponse<T>(response: any): BaseResponseModel<T> {
    if (response && response.succeeded) {
      return response as BaseResponseModel<T>;
    }
    throw new Error('Unexpected response format');
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorResponse: ErrorResponseModel = {
      errorCode: error.status,
      errorStatus: error.statusText || 'Unknown Error',
      errorMessage: error.error?.message || 'Something went wrong',
      errorDetails: error.error?.ErrorDetails,
      stackTrace: error.error?.StackTrace || null
    };
    return throwError(() => errorResponse);
  }

  get<T>(endpoint: string, params?: any): Observable<BaseResponseModel<T>> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, { params, headers: this.getHeaders() }).pipe(
      map((response) => this.handleResponse<T>(response)),
      catchError((error) => this.handleError(error))
    );
  }

  post<T>(endpoint: string, body: any): Observable<BaseResponseModel<T>> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, body, { headers: this.getHeaders() }).pipe(
      map((response) => this.handleResponse<T>(response)),
      catchError((error) => this.handleError(error))
    );
  }

  put<T>(endpoint: string, body: any): Observable<BaseResponseModel<T>> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, body, { headers: this.getHeaders() }).pipe(
      map((response) => this.handleResponse<T>(response)),
      catchError((error) => this.handleError(error))
    );
  }

  delete<T>(endpoint: string): Observable<BaseResponseModel<T>> {
    return this.http.delete(`${this.baseUrl}/${endpoint}`, { headers: this.getHeaders() }).pipe(
      map((response) => this.handleResponse<T>(response)),
      catchError((error) => this.handleError(error))
    );
  }
}

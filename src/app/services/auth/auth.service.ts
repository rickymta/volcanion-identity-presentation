import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { LoginModel } from '../../models/auth/login.model';
import { RegisterModel } from '../../models/auth/register.model';
import { LoginResponseModel } from '../../models/base/login-response.model';
import Swal from 'sweetalert2';
import { Account } from '../../models/entities/account.entity';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/api.service';
import { BaseResponseModel, ErrorResponseModel } from '../../models/base/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Account = null;

  constructor(private apiService: ApiService) {}

  setUser(user: Account): void {
    this.user = user;
  }

  getUser(): Account {
    return this.user;
  }

  signup(data: RegisterModel): Observable<BaseResponseModel<LoginResponseModel>> {
    return this.apiService.post<LoginResponseModel>('auth/register', data).pipe(
      tap((response) => {
        if (response.succeeded) {
          this.storeAuthData(response.data);
        } else {
          throw new Error('Unexpected response format');
        }
      }),
      catchError((error: ErrorResponseModel) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.errorMessage || 'Something went wrong. Please try again!',
          confirmButtonText: 'OK'
        });
        console.error('Error during signup:', error);
        throw error;
      })
    );
  }

  login(data: LoginModel): Observable<BaseResponseModel<LoginResponseModel>> {
    return this.apiService.post<LoginResponseModel>('auth/login', data).pipe(
      tap((response) => {
        if (response.succeeded) {
          this.storeAuthData(response.data);
        } else {
          throw new Error('Unexpected response format');
        }
      }),
      catchError((error: ErrorResponseModel) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.errorMessage || 'Something went wrong. Please try again!',
          confirmButtonText: 'OK'
        });
        // Log hoặc xử lý lỗi trước khi trả lại
        console.error('Error during login:', error);
        throw error;
      })
    );
  }

  refreshToken(): Observable<BaseResponseModel<LoginResponseModel>> {
    const refreshToken = this.getRefreshToken();
    return this.apiService.post<LoginResponseModel>('auth/refresh-token', refreshToken).pipe(
      tap((response) => {
        if (response.succeeded) {
          this.storeAuthData(response.data);
        } else {
          throw new Error('Unexpected response format');
        }
      }),
      catchError((error: ErrorResponseModel) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.errorMessage || 'Something went wrong. Please try again!',
          confirmButtonText: 'OK'
        });
        // Log hoặc xử lý lỗi trước khi trả lại
        console.error('Error during login:', error);
        throw error;
      })
    );
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('authUser');
  }

  isLoggedIn(): boolean {
    if (!this.user) {
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) {
        this.setUser(JSON.parse(storedUser));
        return true;
      }
      return false;
    }
    return true;
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  private storeAuthData(data: LoginResponseModel) {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('authUser', JSON.stringify(data.account));
    this.setUser(data.account);
  }
}

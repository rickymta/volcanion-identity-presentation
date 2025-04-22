import { Injectable } from '@angular/core';
import { Account } from '../../models/entities/account.entity';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/api.service';
import { BaseResponseModel, ErrorResponseModel } from '../../models/base/base-response.model';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AccountRequest } from '../../models/request/account.request';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: Account[] = [];

  constructor(private apiService: ApiService) {}

  getAccounts(): Observable<BaseResponseModel<Account[]>> {
    return this.apiService.get<Account[]>('account/get-all').pipe(
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

  getAccount(id: string): Observable<BaseResponseModel<Account>> {
    return this.apiService.get<Account>(`account/${id}`).pipe(
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

  createAccount(account: AccountRequest): Observable<BaseResponseModel<string>> {
    return this.apiService.post<string>('account', account).pipe(
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

  updateAccount(account: AccountRequest): Observable<BaseResponseModel<boolean>> {
    return this.apiService.put<boolean>(`account`, account).pipe(
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

  deleteAccount(id: string): Observable<BaseResponseModel<Account>> {
    return this.apiService.delete<Account>(`account/${id}`).pipe(
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
}

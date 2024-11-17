// angular import
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account/account.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Account } from '../../models/entities/account.entity';
import { NgOptimizedImage } from '@angular/common';
import { AccountRequest } from '../../models/request/account.request';
import { BaseResponseModel } from '../../models/base/base-response.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export default class AccountComponent {
  accountService = inject(AccountService);
  router = inject(Router);
  accounts: Account[] = [];
  id: string = '';

  protected accountForm = new FormGroup({
    id: new FormControl(''),
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    avatar: new FormControl(''),
    isActived: new FormControl(true),
  });

  ngOnInit() {
    this.accountService.getAccounts().subscribe({
      next: (data: any) => {
        this.accounts = data.data;
      },
      error: (err: any) => {
        console.error('Error while fetching accounts', err);
      }
    });
  }

  onEdit(id: string): void {
    const accountFind = this.accounts.find((account) => account.id === id);
    if (accountFind) {
      this.accountForm.patchValue(accountFind);
    }
  }

  onDelete(id: string): void {
    this.accountService.deleteAccount(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (err: any) => {
        console.error('Error while deleting account', err);
      }
    });
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      const account: AccountRequest = {
        id: this.accountForm.value.id,
        fullname: this.accountForm.value.fullname,
        email: this.accountForm.value.email,
        password: this.accountForm.value.password,
        address: this.accountForm.value.address,
        phoneNumber: this.accountForm.value.phoneNumber,
        avatar: this.accountForm.value.avatar
      };

      if (account.id) {
        this.accountService.updateAccount(account).subscribe({
          next: (data: BaseResponseModel<boolean>) => {
            if (data.succeeded) {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Account updated successfully!',
                confirmButtonText: 'OK'
              });
              this.ngOnInit();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error while updating account!',
                confirmButtonText: 'OK'
              });
            }
          },
          error: (err: any) => {
            console.error('Error while updating account', err);
          }
        });
      } else {
        this.accountService.createAccount(account).subscribe({
          next: (data: BaseResponseModel<string>) => {
            if (data.succeeded) {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Account create successfully!',
                confirmButtonText: 'OK'
              });
              this.ngOnInit();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error while creating account!',
                confirmButtonText: 'OK'
              });
            }
            this.ngOnInit();
          },
          error: (err: any) => {
            console.error('Error while creating account', err);
          }
        });
      }
    }
  }

  updateStatus(id: string, status: boolean): void {
    let account = this.accounts.find((account) => account.id === id);
    if (!account) {
      return;
    }
    account.isActived = status;
    this.accountService.updateAccount(account).subscribe({
      next: (data: any) => {
        if (data.succeeded) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Account updated successfully!',
            confirmButtonText: 'OK'
          });
          this.ngOnInit();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error while updating account!',
            confirmButtonText: 'OK'
          });
        }
        this.ngOnInit();
      },
      error: (err: any) => {
        console.error('Error while updating account status', err);
      }
    });
  }
}

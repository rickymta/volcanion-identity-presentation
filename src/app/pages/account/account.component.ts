// angular import
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
//import Swal from 'sweetalert2';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { AccountFilter } from '../../models/filter/account.filter';
import { HeaderModel } from '../../models/data-table/header.model';
import { FilterModel } from '../../models/data-table/filter.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Account } from '../../models/entities/account.entity';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, DataTableComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export default class AccountComponent implements OnInit {
  accountService = inject(AccountService);
  router = inject(Router);

  protected filterForm = new FormGroup({
    fullname: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  tableHeaders: HeaderModel[] = [];
  accounts: Account[] = [];

  accountFilter: AccountFilter = {
    fullname: null,
    address: null,
    email: null,
    phoneNumber: null,
    page: 1,
    pageSize: 10,
    sortBy: null
  };

  ngOnInit() {
    this.tableHeaders = [
      {
        title: 'id',
        displayName: 'ID',
        isSortable: false,
        isFilter: false,
        isDisplay: false
      },
      {
        title: 'name',
        displayName: 'Name',
        isSortable: false,
        isFilter: false,
        isDisplay: true
      },
      {
        title: 'quantity',
        displayName: 'Quantity',
        isSortable: false,
        isFilter: false,
        isDisplay: true
      },
      {
        title: 'status',
        displayName: 'Status',
        isSortable: false,
        isFilter: false,
        isDisplay: true
      },
      {
        title: 'status_type',
        displayName: 'Status type',
        isSortable: false,
        isFilter: false,
        isDisplay: false
      },
      {
        title: 'amount',
        displayName: 'Amount',
        isSortable: false,
        isFilter: false,
        isDisplay: true
      }
    ];
    // this.accountService.getAccounts().subscribe({
    //   next: (data: any) => {
    //     this.accounts = data.data;
    //   },
    //   error: (err: any) => {
    //     console.error('Error while fetching accounts', err);
    //   }
    // });
  }

  onSearch() {
    if (this.filterForm.valid) {
      this.accountFilter.fullname = this.filterForm.value.fullname;
      this.accountFilter.address = this.filterForm.value.address;
      this.accountFilter.email = this.filterForm.value.email;
      this.accountFilter.phoneNumber = this.filterForm.value.phoneNumber;
      console.log(this.accountFilter);
    }
  }

  onAfterChangePageSize(filter: FilterModel): void {
    this.accountFilter.pageSize = filter.pageSize;
    this.accountFilter.page = 1;
  }

  onView(id: string): void {
    console.log(id);
    // this.router.navigate(['/account', id]);
  }

  onEdit(id: string): void {
    console.log(id);
  }

  onDelete(id: string): void {
    console.log(id);
    // this.accountService.deleteAccount(id).subscribe({
    //   next: (data: any) => {
    //     console.log(data);
    //     this.ngOnInit();
    //   },
    //   error: (err: any) => {
    //     console.error('Error while deleting account', err);
    //   }
    // });
  }
}

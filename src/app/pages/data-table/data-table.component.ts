import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {
  @Input() tableData: any[] = []; // Dữ liệu của bảng
  @Input() tableHeaders: string[] = []; // Tiêu đề bảng

  filteredData: any[] = []; // Dữ liệu sau khi tìm kiếm
  pageSize: number = 5; // Số hàng trên mỗi trang
  currentPage: number = 1; // Trang hiện tại
  totalPages: number = 0; // Tổng số trang
  searchQuery: string = ''; // Từ khóa tìm kiếm

  ngOnInit() {
    this.filteredData = [...this.tableData];
    this.updatePagination();
  }

  // Tìm kiếm
  onSearch(query: string) {
    this.searchQuery = query.toLowerCase();
    this.filteredData = this.tableData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(this.searchQuery)
      )
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  // Cập nhật số trang
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
  }

  // Lấy dữ liệu trang hiện tại
  getCurrentPageData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(startIndex, startIndex + this.pageSize);
  }

  // Chuyển trang
  goToPage(page: number) {
    this.currentPage = page;
  }
}

import { SortModel } from '../data-table/filter.model';

export class BaseFilter {
  page: number = 1;
  pageSize: number = 10;
  sortBy: SortModel[] | null = [];
}

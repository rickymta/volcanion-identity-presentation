export interface FilterModel {
  page: number;
  pageSize: number;
  sortBy: SortModel[] | null;
  selected: string[];
}

export interface SortModel {
  field: string;
  direction: 'asc' | 'desc';
}

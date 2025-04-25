export interface DataPagingModel<T> {
  paginationCount?: number | null;
  data: T[] | null;
}

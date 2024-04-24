// interface pagination
export interface MetaDatePage {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  hasNextPage: boolean;
  previous_page_url: boolean;
}

export interface Page<T> {
  meta: MetaDatePage;
  data: T[];
}

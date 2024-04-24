export interface MetaDataPageAPI {
  total: number;
  per_page: number; // 10;
  current_page: number; // 1;
  last_page: number; // 3;
  first_page: number; // 1;
  first_page_url: string; // '/?page=1';
  last_page_url: string; // '/?page=3';
  next_page_url: string | null; // '/?page=2';
  previous_page_url: string | null; // null;
}

// interface Generic
export interface PageApi<T> {
  meta: MetaDataPageAPI;
  data: T[];
}

export interface PageParams {
  page?: number;
  per_page?: number;
}

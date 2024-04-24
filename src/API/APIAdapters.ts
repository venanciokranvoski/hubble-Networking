import { MetaDatePage } from '@types';
import { MetaDataPageAPI } from './apiTypes';

function ToMetaDataPage(meta: MetaDataPageAPI): MetaDatePage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    previous_page_url: !!meta.previous_page_url,
  };
}

export const apiAdapter = {
  ToMetaDataPage,
};

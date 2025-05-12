import { MetaDatePage, Page } from '@types';
import { MetaDataPageAPI, PageApi } from './apiTypes';

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

function toPageModel<apiType, ModelType>(
  page: PageApi<apiType>,
  adapterToModel:(api: apiType) => ModelType,
): Page<ModelType> {
  return {
    meta: ToMetaDataPage(page.meta),
    data: page.data.map(adapterToModel),
  }
}


export const apiAdapter = {
  ToMetaDataPage,
  toPageModel
};

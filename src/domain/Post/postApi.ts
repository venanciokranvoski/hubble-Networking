import { apiConfig, PageApi } from '@api';
import { PostAPI } from './postTypes';

async function getList(): Promise<PageApi<PostAPI>> {
  const response = await apiConfig.get<PageApi<PostAPI>>('user/post');
  return response.data;
}

export const postApi = {
  getList,
};

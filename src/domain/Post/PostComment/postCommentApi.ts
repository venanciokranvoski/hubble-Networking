import { apiConfig, PageApi, PageParams } from '@api';
import { PostCommentedAPI } from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams
): Promise<PageApi<PostCommentedAPI>> {
  const response = await apiConfig.get<PageApi<PostCommentedAPI>>(
    'user/post_comment',
    {
      params: {
        post_id,
        ...pageParams,
      },
    }
  );
  return response.data;
}

export const postCommentedApi = {
  getList,
};

import { apiConfig, PageApi, PageParams } from '@api';
import { PostCommentedAPI } from './postCommentTypes';
import reactotron from '../../../../src/config/Reactotron';

async function getList(
  post_id: number,
  pageParams?: PageParams
): Promise<PageApi<PostCommentedAPI>> {
  const fetchPost = reactotron.benchmark('fetch comentario!');
  fetchPost.step('func request');
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

async function create(
  post_id: number,
  message: string
): Promise<PostCommentedAPI> {
  const response = await apiConfig.post<PostCommentedAPI>('user/post_comment', {
    post_id,
    message,
  });
  return response.data;
}

export const postCommentedApi = {
  getList,
  create,
};

import { apiConfig, PageApi, PageParams } from '@api';
import { PostCommentedAPI } from './postCommentTypes';


export const POST_COMMENT_PATH = 'user/post_comment'

async function getList(
  post_id: number,
  pageParams?: PageParams
): Promise<PageApi<PostCommentedAPI>> {
  const response = await apiConfig.get<PageApi<PostCommentedAPI>>(
    POST_COMMENT_PATH,
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
  const response = await apiConfig.post<PostCommentedAPI>(POST_COMMENT_PATH, {
    post_id,
    message,
  });
  return response.data;
}

async function remove(postComentedID: number): Promise<{ message: string }> {
  const response = await apiConfig.delete<{ message: string }>(
    `${POST_COMMENT_PATH}/${postComentedID}`
  );

  return response.data;
}

export const postCommentedApi = {
  getList,
  create,
  remove,
};

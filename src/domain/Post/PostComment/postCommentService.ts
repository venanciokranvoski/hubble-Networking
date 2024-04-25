import { Page } from '@types';
import { PostComment } from './postCommentTypes';
import { apiAdapter } from '@api';
import { postCommentedApi } from './postCommentApi';
import { postCommentAdapter } from './postCommentedAdpter';

const Per_Page = 10;
async function getList(
  postId: number,
  page: number
): Promise<Page<PostComment>> {
  const postCommentedPageAPI = await postCommentedApi.getList(postId, {
    page,
    per_page: Per_Page,
  });

  return {
    data: postCommentedPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.ToMetaDataPage(postCommentedPageAPI.meta),
  };
}

export const postCommentService = {
  getList,
};

// ++++ Service layer
// Do it separation of API with layer of service
// ++++
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

// create commented
async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentedApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}
// remove
async function remove(postComentedID: number): Promise<string> {
  const response = await postCommentedApi.remove(postComentedID);
  return response.message;
}

/**
 * @description user can delete the commented if it is the post author or comemented
 *
 * @param userId the current session user id
 * @param postComment comment to be deleted
 * @param postAuthorID the id the post author
 */

function isAllowToDelete(
  postcommented: PostComment,
  userId: number,
  postAuthorID: number
): boolean {
  if (postcommented.author.id === userId) return true;

  if (postAuthorID === userId) return true;

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};

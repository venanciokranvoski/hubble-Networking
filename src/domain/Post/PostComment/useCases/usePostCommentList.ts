// +++++
// The access in API between of use Cases !
// ++++++
import { QueryKeys, usePaginatedList } from '@infra';
import { postCommentService } from '../postCommentService';


export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }
  return usePaginatedList([QueryKeys.PostCommentList, postId], getList);
}

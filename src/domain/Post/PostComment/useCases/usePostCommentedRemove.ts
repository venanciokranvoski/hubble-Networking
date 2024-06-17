import { MutationOptions, useMutation } from '@infra';
import { postCommentService } from '../postCommentService';

export function usePostRemove(option?: MutationOptions<string>) {
  return useMutation<{ postCommentedID: number }, string>(
    ({ postCommentedID }) => postCommentService.remove(postCommentedID),
    option
  );
}

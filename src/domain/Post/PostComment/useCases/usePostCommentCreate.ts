import { postCommentService } from '../postCommentService';
import { PostComment } from '../postCommentTypes';
import { MutationOptions, QueryKeys } from '@infra';
import { , useMutation, useQueryClient } from '@tanstack/react-query';

export function usePostCommentCreate(
  postID: number,
  options?: MutationOptions<PostComment>
) {

  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation<
    PostComment,
    unknown,
    { message: string }
  >({
    mutationFn: (variables) =>
      postCommentService.create(postID, variables.message),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postID]
      })
    },
    onError: () => {
      if(options?.onError){
        options.onError(options?.errorMessage || '');
      }
    }
  });

  // const { mutate, loading, error } = useMutation<
  //   { message: string },
  //   PostComment
  // >(({ message }) => postCommentService.create(postID, message), options);

  async function createCommented(message: string) {
    await mutate({ message });
  }

  return {
    createCommented,
    isLoading,
    isError,
  };
}

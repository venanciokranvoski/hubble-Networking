import { MutationOptions, QueryKeys } from '@infra';
import { postCommentService } from '../postCommentService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function usePostRemove(
  postId: number,
  options?: MutationOptions<string>
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, { postComentedId: number }>({
    mutationFn: ({ postComentedId }) =>
      postCommentService.remove(postComentedId),
    onSuccess: (message) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options?.onSuccess(message);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'mensagem generica');
      }
    },
  });

  return {
    mutate: mutation.mutate,
  };
}

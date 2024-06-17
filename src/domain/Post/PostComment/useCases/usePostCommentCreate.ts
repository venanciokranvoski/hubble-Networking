import { postCommentService } from '../postCommentService';
import { PostComment } from '../postCommentTypes';
import { MutationOptions, useMutation } from '@infra';

export function usePostCommentCreate(
  postID: number,
  options?: MutationOptions<PostComment>
) {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<boolean | null>(null);

  const { mutate, loading, error } = useMutation<
    { message: string },
    PostComment
  >(({ message }) => postCommentService.create(postID, message), options);

  async function createCommented(message: string) {
    await mutate({ message });
  }

  return {
    createCommented,
    loading,
    error,
  };
}

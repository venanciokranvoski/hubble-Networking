import { useState } from 'react';
import { postCommentService } from '../postCommentService';

export function usePostCommentCreate(postID: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createCommented(message: string) {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.create(postID, message);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    createCommented,
    loading,
    error,
  };
}

import { useState } from 'react';
import { postCommentService } from '../postCommentService';
import { PostComment } from '../postCommentTypes';

interface Options {
  onSuccess?: (data:PostComment) => void;
  onError?: (message:string) => void;
}

export function usePostCommentCreate(postID: number, options?:Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createCommented(message: string) {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.create(postID, message);
    } catch (error) {
      if(options?.onError){
        options.onError('Erro ao criar comentario');
      }
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

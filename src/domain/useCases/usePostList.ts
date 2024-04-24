import { Post, postService } from '@domain';
import { useEffect, useState } from 'react';

export function usePostList() {
  const [postListMain, setPostListMain] = useState<Post[]>([]);
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const { data, meta } = await postService.getList(1);
      setPostListMain(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log('ERROR', error);
    } finally {
      setLoading(false);
    }
  }

  async function NextPage() {
    if (loading || !hasNextPage) return;
    try {
      setLoading(true);
      const { data, meta } = await postService.getList(page);
      setPostListMain((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postListMain,
    error,
    loading,
    refetch: fetchInitialData,
    NextPage,
  };
}

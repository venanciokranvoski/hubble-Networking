// list paginatedList generics
import { Page } from '@types';
import { useEffect, useState } from 'react';
// I´m defined a function inside in other function!
export function usePaginatedList<T>(
  getList: (page: number) => Promise<Page<T>>
) {
  const [list, setList] = useState<T[]>([]);
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const { data, meta } = await getList(1);
      setList(data);
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
      const { data, meta } = await getList(page);
      setList((prev) => [...prev, ...data]);
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
    list,
    error,
    loading,
    refetch: fetchInitialData,
    NextPage,
  };
}

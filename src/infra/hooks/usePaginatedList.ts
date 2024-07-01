// list paginatedList generics
import { useInfiniteQuery } from '@tanstack/react-query';
import { Page } from '@types';
import { useEffect, useState } from 'react';

interface getUsePaginatedList<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean; // has next page ?
}

// I´m defined a function inside in other function!
export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>
): getUsePaginatedList<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) => getList(pageParam),
    getNextPageParam: ({ meta }) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}

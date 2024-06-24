import { userService } from '../userService';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@infra';

export function useUserGetById(id: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
  });

  return {
    user: data,
    isLoading,
    isError,
  };
}

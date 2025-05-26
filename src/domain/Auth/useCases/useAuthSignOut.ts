import { useMutation } from '@tanstack/react-query';
import { authService } from '../authService';
import { useAuthCredentials, useSearchHistoryService } from '@services';

export function useAuthSignOut() {
  const { removeCredentials } = useAuthCredentials();
  const { clearUserList } = useSearchHistoryService();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSettled: () => {   // option with return or not it execute
      removeCredentials();
      clearUserList();
    }
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
}

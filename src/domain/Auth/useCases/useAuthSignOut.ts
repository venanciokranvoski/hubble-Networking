import { useMutation } from '@tanstack/react-query';
import { authService } from '../authService';
import { useAuthCredentials } from '@services';

export function useAuthSignOut() {
  const { removeCredentials } = useAuthCredentials();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: removeCredentials,
  });

  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
}

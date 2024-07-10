import { MutationOptions } from '@infra';
import { AuthCredentials } from '../authTypes';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../authService';
import { useAuthCredentials } from '@services';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const { saveCredentials } = useAuthCredentials();
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    retry: false,
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: (authCrendials) => {
      saveCredentials(authCrendials);
    },
  });

  return {
    isLoading: mutation.isLoading,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}

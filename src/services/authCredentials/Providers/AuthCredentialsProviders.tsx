import React, { createContext, useEffect, useState } from 'react';
import { AuthCredentalsServices } from '../authCredentialsType';
import { AuthCredentials, authService } from '@domain';
import { authCredentialStorage } from '../authCredentialsStorage';

export const AuthCredentialsContext = createContext<AuthCredentalsServices>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setCredentials] = useState<AuthCredentials | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialStorage.set(ac);
    setCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authCredentialStorage.remove();
    authService.removeToken();
    setCredentials(null);
  }

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setCredentials(ac);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthCredentialsContext.Provider
      value={{ authCredentials, isLoading, saveCredentials, removeCredentials }}
    >
      {children}
    </AuthCredentialsContext.Provider>
  );
}

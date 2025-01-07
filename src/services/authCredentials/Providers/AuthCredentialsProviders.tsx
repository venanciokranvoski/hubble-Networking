import React, { createContext, useEffect, useState } from 'react';
import { AuthCredentalsServices } from '../authCredentialsType';
import { AuthCredentials, authService } from '@domain';
import { authCredentialStorage } from '../authCredentialsStorage';
import { apiConfig, registerInterceptor } from '@api';
import { authApi } from '../../../domain/Auth/authApi';

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

  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      removeCredentials, 
      saveCredentials
    });

    // remover listener when dismounted component
    return interceptor;
  }, [authCredentials]);

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

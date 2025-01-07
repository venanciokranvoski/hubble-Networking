import { apiConfig } from '@api';
import { authAdapter } from './authAdpter';
import { authApi } from './authApi';
import { AuthCredentials, SignUpData } from './authTypes';

async function signIn(
  email: string,
  password: string
): Promise<AuthCredentials> {
  try {
    const AuthCredentialAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(AuthCredentialAPI);
  } catch (error) {
    throw new Error('Email ou senha inválido');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

// fica visivel em todo projeto
async function updateToken(token: string) {
  apiConfig.defaults.headers.common.Authorization = `Bearer ${token}`;
}
 
async function removeToken() {
  apiConfig.defaults.headers.common.Authorization = null;
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const { isAvailable } = await authApi.isUserNameAvailable({username});
  return isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const { isAvailable } = await authApi.isUserNameAvailable({email});
  return isAvailable;
}

async function authenticatedByRefleshToken(refleshToken: string ): Promise<AuthCredentials> {
  const acAPI = await authApi.refleshToken(refleshToken);
  return authAdapter.toAuthCredentials(acAPI);
}



export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  authenticatedByRefleshToken,
  isRefleshToken: authApi.IsRefreshIsToken
};

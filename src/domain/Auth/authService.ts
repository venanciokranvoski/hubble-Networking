import { apiConfig } from '@api';
import { authAdapter } from './authAdpter';
import { authApi } from './authApi';
import { AuthCredentials, EditPasswordParams, SignUpData } from './authTypes';

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

async function requestNewPassword(email: string): Promise<string>{
  const {message} = await authApi.forgotPassword({email});
  return message;
}

async function updatePassword(params: EditPasswordParams): Promise<string>{
  const {message} = await authApi.editPassword(params);
  return message;
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
  updatePassword,
  requestNewPassword,
  authenticatedByRefleshToken,
  isRefleshToken: authApi.IsRefreshIsToken
};

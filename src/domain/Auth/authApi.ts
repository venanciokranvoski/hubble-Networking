import { apiConfig } from '@api';

import { AuthCredentialAPI, SignUpDataAPI } from './authTypes';
import { UserApi } from '../User';

async function signIn(
  email: string,
  password: string
): Promise<AuthCredentialAPI> {
  const response = await apiConfig.post<AuthCredentialAPI>('login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await apiConfig.get<string>('profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserApi> {
  const response = await apiConfig.post<UserApi>('register', data);
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
};

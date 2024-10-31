import { apiConfig } from '@api';
import { UserApi } from '../User';
import { AuthCredentialAPI,
         SignUpDataAPI, 
         FildIsAvailableAPI 
        } from './authTypes';

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

async function isUserNameAvailable(params: {
  username: string;
}): Promise<FildIsAvailableAPI> {
  const response = await apiConfig.get<FildIsAvailableAPI>('validate-username', {
    params
  });

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FildIsAvailableAPI> {
  const response = await apiConfig.get<FildIsAvailableAPI>('validate-email', {
    params,
  });

  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable
};

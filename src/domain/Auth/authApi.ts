import { apiConfig } from '@api';
import {AxiosRequestConfig} from 'axios';
import { UserApi } from '../User';
import { AuthCredentialAPI,
         SignUpDataAPI, 
         FildIsAvailableAPI 
        } from './authTypes';


const REFRESH_tOKEN_URL = 'auth/refresh-token';
async function signIn(
  email: string,
  password: string
): Promise<AuthCredentialAPI> {
  const response = await apiConfig.post<AuthCredentialAPI>('auth/login', {
    email,
    password,
  });
  console.log(JSON.stringify(response.data))
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await apiConfig.get<string>('auth/profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserApi> {
  const response = await apiConfig.post<UserApi>('auth/register', data);
  return response.data;
}

async function isUserNameAvailable(params: {
  username: string;
}): Promise<FildIsAvailableAPI> {
  const response = await apiConfig.get<FildIsAvailableAPI>('auth/validate-username', {
    params
  });

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FildIsAvailableAPI> {
  const response = await apiConfig.get<FildIsAvailableAPI>('auth/validate-email', {
    params,
  });
  console.log(response.data)
  return response.data;
}


async function refleshToken(tk: string): Promise<AuthCredentialAPI>{
  const response = await apiConfig.post<AuthCredentialAPI>(REFRESH_tOKEN_URL, {
    refleshToken: tk
  });

  return response.data;
}


function IsRefreshIsToken(request: AxiosRequestConfig): boolean {
  const URL = request.url;
  return (URL === REFRESH_tOKEN_URL)
}



export const authApi = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  refleshToken,
  IsRefreshIsToken
};

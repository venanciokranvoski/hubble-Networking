import { apiConfig } from '@api';
import {AxiosRequestConfig} from 'axios';
import { UserApi } from '../User';
import { AuthCredentialAPI,
          SignUpDataAPI, 
          FieldIsAvailableAPI, 
          EditPasswordParams,
          ForgotPasswordParam
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
}): Promise<FieldIsAvailableAPI> {
  const response = await apiConfig.get<FieldIsAvailableAPI>('auth/validate-username', {
    params
  });

  return response.data;
}

async function forgotPassword(
  params: ForgotPasswordParam,
): Promise<{message: string}> {
  const response = await apiConfig.post<{message: string}>(
    'auth/forgot-password',
    params,
  );

  return response.data;
}

async function editPassword(
  params: EditPasswordParams,
): Promise<{message: string}> {
  const response = await apiConfig.post<{message: string}>(
    `auth/profile/edit-password`,
    params,
  );
  return response.data
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
  editPassword,
  forgotPassword,
  IsRefreshIsToken,
  refleshToken
};

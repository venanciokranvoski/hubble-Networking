import { UserApi, User } from '../User';

export interface AuthCredentials {
  token: string;
  tokenExpiresAt: string;
  refleshToken: string;
  user: User;
}


export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface AuthCredentialAPI {
  auth: {
    type: string; // bearer
    token: string;
    refreshToken: string;
    expires_at: string;
  };
  user: UserApi;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface ForgotPasswordParam{
  email: string;
}

export interface EditPasswordParams {
  currentPassword: string;
  newPassword: string;
}


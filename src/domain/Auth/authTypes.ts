import { UserApi, User } from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialAPI {
  auth: {
    type: string; // bearer
    token: string;
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

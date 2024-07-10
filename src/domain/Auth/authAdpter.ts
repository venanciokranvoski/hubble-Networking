import { userAdapter } from '../User/userAdapter';

import { AuthCredentialAPI, AuthCredentials } from './authTypes';

function toAuthCredentials(
  AuthCredentialAPI: AuthCredentialAPI
): AuthCredentials {
  return {
    token: AuthCredentialAPI.auth.token,
    user: userAdapter.toUser(AuthCredentialAPI.user),
  };
}

export const authAdapter = { toAuthCredentials };

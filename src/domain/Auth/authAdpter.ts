import { userAdapter } from '../User/userAdapter';

import { AuthCredentialAPI, AuthCredentials } from './authTypes';

function toAuthCredentials(
  AuthCredentialAPI: AuthCredentialAPI
): AuthCredentials {
  return {
    token: AuthCredentialAPI.auth.token,
    tokenExpiresAt: AuthCredentialAPI.auth.expires_at,
    refleshToken: AuthCredentialAPI.auth.refreshToken,
    user: userAdapter.toUser(AuthCredentialAPI.user),
  };
}

export const authAdapter = { toAuthCredentials };

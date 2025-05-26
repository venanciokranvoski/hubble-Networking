import { UserApi, AuthCredentials,userAdapter } from "@domain";

const veveUserAPI: UserApi = {
    email: 'veve@gmail.com',
    username: 'veve',
    first_name: 'venancio',
    full_name: 'venancio dumas ',
    id: 12,
    is_online: true,
    last_name: 'dumas',
    profile_url: 'http://veve.com.br',
}

export const veveAuthCredentials: AuthCredentials = {
    token: 'access-token',
    tokenExpiresAt: '2030-10-07T12:08:50.433+00:00',
    refleshToken: 'refresh-token',
    user: userAdapter.toUser(veveUserAPI),
};

export const mockUtils = {
    veveUserAPI,
    veveAuthCredentials
}
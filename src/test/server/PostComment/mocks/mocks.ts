import { PageApi } from '@api';
import { AuthCredentials, userAdapter, UserApi } from '@domain';
import { PostCommentedAPI } from '@post';

const POST_ID = 1;

const veveUserAPI: UserApi = {
  id: 7,
  first_name: 'venancio',
  last_name: 'alves',
  username: 'veve',
  email: 'dumasvenancio@gmail.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png',
  is_online: false,
  full_name: 'Mateus de Souza',
};


export const veveAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2030-10-07T12:08:50.433+00:00',
  refleshToken: 'refresh-token',
  user: userAdapter.toUser(veveUserAPI),
};

export const venancioPostCommentAPI: PostCommentedAPI = {
  id: 113,
  message: 'venancio augusto ',
  user_id: 7,
  post_id: POST_ID,
  created_at: '2023-10-20T10:26:18.000+00:00',
  updated_at: '2023-10-21T07:46:21.828+00:00',
  user: veveUserAPI,
  meta: {},
}


 const postCommentAPI: PostCommentedAPI = {
  id: 97,
  message: 'comentário aleatório dd3dd3d3d3d3d3d3d33d3d',
  user_id: 4,
  post_id: POST_ID,
  created_at: '2023-10-18T22:19:17.000+00:00',
  updated_at: '2023-10-21T07:46:21.821+00:00',
  user: {
    id: 4,
    first_name: 'Marcelo',
    last_name: 'Tavares',
    username: 'celotavares',
    email: 'celotavares@coffstack.com',

    profile_url:
      'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/6-marcelo.png',
    is_online: false,
    full_name: 'Marcelo Tavares',
  },

  meta: {},
};

const mockedPostCommentedResponse: PageApi<PostCommentedAPI> = {
  meta: {
    total: 1,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null,
  },
  data: [postCommentAPI, venancioPostCommentAPI],
};


export const mockedData = {
    POST_ID,
    mockedPostCommentedResponse, 
    postCommentAPI,
    veveAuthCredentials
}
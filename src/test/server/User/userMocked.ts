import { PageApi } from '@api';
import { UserApi } from '@domain';

const user1: UserApi = {
  id: 17,
  first_name: 'venancio',
  last_name: 'alves',
  username: 'veve',
  email: 'dumasvenancio@gmail.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png',
  is_online: false,
  full_name: 'Mateus de Souza',
};

const user2: UserApi = {
  id: 18,
  first_name: 'maria',
  last_name: 'santos',
  username: 'maria', 
  email: 'maria.santos@gmail.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-maria.png',
  is_online: false,
  full_name: 'maria santos', 
};


const userList: UserApi[] = [user1, user2];

const mockedUserResponse: PageApi<UserApi> = {
    meta: {
        total: 2,
        per_page: 10,
        current_page:1,
        last_page: 1,
        first_page: 1,
        first_page_url: '/?page=1', 
        last_page_url: '/?page=1',
        next_page_url: null,
        previous_page_url: null,
    },
    data: userList,
};

export const usermocked = {mockedUserResponse, userList, user1, user2}
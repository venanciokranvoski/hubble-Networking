import { apiConfig } from '@api';
import { UserApi } from './userTypes';

const PATH = 'users';

async function getById(userID: string): Promise<UserApi> {
  const response = await apiConfig.get<UserApi>(`${PATH}/${userID}`);
  return response.data;
}

export const userApi = {
  getById,
};

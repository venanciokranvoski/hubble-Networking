import { apiConfig, PageApi } from '@api';
import { UserApi } from './userTypes';

const PATH = 'users';

async function getById(userID: string): Promise<UserApi> {
  const response = await apiConfig.get<UserApi>(`${PATH}/${userID}`);
  return response.data;
}

async function getList(search: string): Promise<PageApi<UserApi>> {
  const response = await apiConfig.get<PageApi<UserApi>>(`${PATH}`, {
    params: {search}
  })
  return response.data
}

export const userApi = {
  getById,
  getList
};

import { userAdapter } from './userAdapter';
import { User } from './userTypes';
import { userApi } from './userApi';

async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};

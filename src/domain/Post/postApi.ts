import { postListMock } from './postListMock';
import { Post } from './types';

async function getList(): Promise<Post[]> {
  // Todo simulator and delay in API
  await new Promise((resolve) => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};

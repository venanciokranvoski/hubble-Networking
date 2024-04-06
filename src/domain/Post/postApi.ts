import { postListMock } from './postListMock';
import { Post } from './types';

async function getList(): Promise<Post[]> {
  // Todo simulator and delay in API
  return postListMock;
}

export const postApi = {
  getList,
};

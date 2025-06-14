import { Page } from '@types';
import { postAdapter } from './postAdapter';
import { postApi } from './postApi';
import { Post } from './postTypes';
import { apiAdapter } from '@api';
import { ImageForUpload } from '@services';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({ page, per_page: 10 });

  return {
    data: postPageAPI?.data?.map(postAdapter.toPost),
    meta: apiAdapter?.ToMetaDataPage(postPageAPI.meta),
  };
}

async function createPost(text: string, imageCover: ImageForUpload): Promise<Post>{
  const postApiData = await postApi.createPost(text, imageCover);
  return postAdapter.toPost(postApiData);
}

export const postService = {
  getList,
  createPost
};

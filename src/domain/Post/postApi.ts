import { apiConfig, PageApi, PageParams } from '@api';
import { PostAPI } from './postTypes';
import { ImageForUpload } from '@services';

async function getList(params: PageParams): Promise<PageApi<PostAPI>> {
  const response = await apiConfig.get<PageApi<PostAPI>>('user/post', {
    params,
  });
  return response.data;
}

async function createPost(text: string, imageCover: ImageForUpload): Promise<PostAPI>{
  const form = new FormData();
  form.append('text', text);
  form.append('imageCover', imageCover);

  const response = await apiConfig.postForm<PostAPI>('user/post', form);
  return response.data;

}

export const postApi = {
  getList,
  createPost
};

import {MutationOptions, QueryKeys} from '@infra';
import {ImageForUpload, multimediaService} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';


import { postService } from './postService';
import { Post } from './postTypes';



export function usePostCreate(options?: MutationOptions<Post>){
    const queryClient = useQueryClient();

    const {mutate, isLoading, isError} = useMutation<Post, Error, {text: string; imageCover: ImageForUpload}>({
        mutationFn: ({text, imageCover}) => 
            postService.createPost(text, imageCover),
        onSuccess: post => {
            queryClient.invalidateQueries({queryKey: [QueryKeys.PostList]});
            if(options?.onSuccess){
                options.onSuccess(post);
            }
        },
        onError: (error) => {
            if(options?.onError){
                options.onError(options.errorMessage || error.message || 'erro ao criar post');
            }
        },
    });

    async function createPost({description,imageUri,}: {
        description: string;
        imageUri: string;
    }) {
        try {
            const imageCover = await multimediaService.prepareForUpload(imageUri);
            mutate({text: description, imageCover});
        } catch (error) {
        console.log('erro ao processar imagem ', error)    
        }

    }
    return {
        isLoading,
        isError,
        createPost
    }
}
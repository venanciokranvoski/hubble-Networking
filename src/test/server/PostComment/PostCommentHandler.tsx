//**
// ++++++++++
// @mockando API
//  */

import { BASE_URL, PageApi } from '@api';
import { POST_COMMENT_PATH, PostCommentedAPI } from '@post';
import {http, HttpResponse} from 'msw';
import { mockedData } from './mocks/mocks';

const FULL_URL = `${BASE_URL}${POST_COMMENT_PATH}`;

let  inmemoryResponse = {...mockedData.mockedPostCommentedResponse}

export const postCommentHandlers = [
    http.get(FULL_URL, async () => {
        const response: PageApi<PostCommentedAPI> = inmemoryResponse;

        return HttpResponse.json(response, {status: 200});
    }),

    http.post<any, {post_id: number; message: string}>(
        FULL_URL,
        async ({request}) => {
            const body = await request.json();

            const newPostCommentAPI: PostCommentedAPI = {
                ...mockedData.postCommentAPI,
                id: 989,
                post_id: body.post_id,
                message: body.message
            };

            inmemoryResponse.data = [newPostCommentAPI, ...inmemoryResponse.data];
            inmemoryResponse.meta = {
                ...inmemoryResponse.meta,
                total: inmemoryResponse.meta.total + 1,
            };

            return HttpResponse.json(newPostCommentAPI, {status: 201})
        }
    ),

    http.delete(`${FULL_URL}/:postCommentId`, async  ({params}) => {
        const postCommentId = params.postCommentId;

        inmemoryResponse.data = inmemoryResponse.data.filter(
            item => item.id.toString() !== postCommentId,
        )
        inmemoryResponse.meta = {
            ...inmemoryResponse.meta,
            total: inmemoryResponse.meta.total - 1,
        };

        return HttpResponse.json({message: 'removed'}, {status: 200});


    })
];

// ver a aula 9 ver o git e ver oq faltou pouco . 
import { setupServer } from 'msw/node';
import { postCommentHandlers } from './PostComment/PostCommentHandler';


export const server = setupServer(...postCommentHandlers);


export {mockedData as mockedPostComment}  from './PostComment/mocks/mocks'

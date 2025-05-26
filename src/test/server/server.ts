import { setupServer } from 'msw/node';
import { postCommentHandlers } from './PostComment/PostCommentHandler';
import { usersHandlers } from './User/userHandlers';

export const server = setupServer(...postCommentHandlers, ...usersHandlers);

export {mockedData as mockedPostComment}  from './PostComment/mocks/mocks'

export {usermocked} from './User/userMocked';

export {} from './PostComment/PostCommentHandler';
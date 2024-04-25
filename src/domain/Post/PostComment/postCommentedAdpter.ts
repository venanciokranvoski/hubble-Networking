import { PostComment, PostCommentedAPI } from './postCommentTypes';

function toPostComment(post_comment: PostCommentedAPI): PostComment {
  return {
    id: post_comment.id,
    message: post_comment.message,
    created_at: post_comment.created_at,
    author: {
      id: post_comment.user.id,
      name: post_comment.user.full_name,
      profileURL: post_comment.user.profile_url,
      userName: post_comment.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};

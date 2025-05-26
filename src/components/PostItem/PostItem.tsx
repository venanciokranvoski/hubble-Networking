import React from 'react';
import { Box } from '../Box/Box';
import { Post } from '@domain';
import { ProfileUser } from '@components';
import { PostImage } from './components/ImagePost/PostImage';
import { PostActions } from './components/PostActions/PostActions';
import { PostBottom } from './components/PostBottom/PostBottom';

interface PropsPost {
  post: Post;
}

export function PostItem({ post }: PropsPost) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      {''}
      <ProfileUser user={{
        id: post.author.id,
        username: post.author.userName,
        profileUrl: post.author.profileURL
      }} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        commentCount={post.commentCount}
        text={post.text}
        id={post.id}
      />
    </Box>
  );
}

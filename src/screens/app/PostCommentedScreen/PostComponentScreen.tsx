import React from 'react';
import { Box, Screen } from '@components';
import { AppScreenProps } from '@routes';
import { PostComment, usePostCommentList } from '@post';
import { FlatList, ListRenderItemInfo } from 'react-native';
import {
  PostCommentedBottom,
  PostCommentedItem,
  PostCommentTextMessage,
} from './components';
import { useAppSafeArea } from '@hooks';
import { useUser } from '@domain';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentedScreen'>) {
  // const postID = route.params.postId;

  const postID = route.params.postID;
  const { list, fetchNextPage, hasNextPage, refresh } =
    usePostCommentList(postID);

  const { id } = useUser();

  const { bottom } = useAppSafeArea();

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentedItem
        postCommented={item}
        onRemoveCommented={refresh}
        userId={id}
        postAuthorID={id}
      />
    );
  }

  return (
    <Screen flex={1} title="Comentarios" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={list}
          contentContainerStyle={{ paddingBottom: bottom }}
          renderItem={renderItem}
          ListFooterComponent={
            <PostCommentedBottom
              hasNextPage={hasNextPage}
              nextPage={fetchNextPage}
            />
          }
        />
        <PostCommentTextMessage postID={postID} />
      </Box>
    </Screen>
  );
}

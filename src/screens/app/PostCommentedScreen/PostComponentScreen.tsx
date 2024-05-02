import React from 'react';
import { Screen } from '@components';
import { AppScreenProps } from '@routes';
import { PostComment, usePostCommentList } from '@post';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { PostCommentedBottom, PostCommentedItem } from './components';
import { useAppSafeArea } from '@hooks';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentedScreen'>) {
  // const postID = route.params.postId;
  const postID = route.params.postID;
  const { list, NextPage, hasNextPage } = usePostCommentList(postID);

  const { bottom } = useAppSafeArea();

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return <PostCommentedItem postCommented={item} />;
  }

  return (
    <Screen title="Comentarios" canGoBack>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={list}
        contentContainerStyle={{ paddingBottom: bottom }}
        renderItem={renderItem}
        ListFooterComponent={
          <PostCommentedBottom hasNextPage={hasNextPage} nextPage={NextPage} />
        }
      />
    </Screen>
  );
}

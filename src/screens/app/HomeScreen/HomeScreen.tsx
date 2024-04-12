import React, { useEffect, useState } from 'react';
import { Box, Button, PostItem, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';
import { Post, postService } from '@domain';
import { Dimensions, FlatList, Image, ListRenderItemInfo } from 'react-native';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postListMain, setPostListMain] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then((list) => setPostListMain(list));
  });

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen>
      <FlatList
        data={postListMain}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}

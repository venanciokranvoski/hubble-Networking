import React, { useEffect, useState } from 'react';
import { PostItem, Screen } from '@components';
import { AppTabScreenProps } from '@routes';
import { Post, postService } from '@domain';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postListMain, setPostListMain] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then((list) => setPostListMain(list));
  });

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postListMain}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};

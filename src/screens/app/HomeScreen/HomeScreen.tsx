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
import HomeHeader from './Components/HomeHeader';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postListMain, setPostListMain] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const list = await postService.getList();
      setPostListMain(list);
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  useEffect(() => {
    fetchData();
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
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};

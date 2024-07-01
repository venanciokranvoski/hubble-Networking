import React, { useRef } from 'react';
import { PostItem, Screen } from '@components';
import { AppTabScreenProps } from '@routes';
import { Post, usePostList } from '@domain';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';
import HomeHeader from './Components/HomeHeader';
import { HomeEmpty } from './Components/HomeExpty';
import { useScrollToTop } from '@react-navigation/native';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const {
    list: postList,
    isError,
    isLoading,
    refresh,
    fetchNextPage,
  } = usePostList();

  // reference FlatList handle FlatList in TOP
  const FlatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(FlatListRef);
  // =========

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={FlatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        onEndReached={fetchNextPage} // execute function or here end list
        onEndReachedThreshold={0.1}
        contentContainerStyle={{
          flexGrow: 1,
          flex: postList.length === 0 ? 1 : undefined,
        }} // here options is for scrool it works
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={refresh} loading={isLoading} error={isError} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
  flex: 1,
};

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

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { error, loading, list: dataList, refetch, NextPage } = usePostList();

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
        data={dataList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshing={loading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
        onEndReached={NextPage} // execute function or here end list
        onEndReachedThreshold={0.1}
        contentContainerStyle={{
          flexGrow: 1,
          flex: dataList.length === 0 ? 1 : undefined,
        }} // here options is for scrool it works
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={refetch} loading={loading} error={error} />
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

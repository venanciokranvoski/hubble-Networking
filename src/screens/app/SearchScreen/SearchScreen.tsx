import React from 'react';

import { Icon, ProfileUser, Screen, TextInput } from '@components';
import { AppScreenProps } from '@routes';
import { useDebounce } from '@hooks';
import { User, useUserSearch } from '@domain';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { SearchHistory } from './components/SearchHistory';
import { useSearchHistoryService } from '@services';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search);
  const {addUser} = useSearchHistoryService();

  const { list } = useUserSearch(debouncedSearch);

  function renderItem({ item }: ListRenderItemInfo<User>) {
    return <ProfileUser avatarSize={{size: 48}} onPress={() => addUser(item)} user={item} />;
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon color="gray3" name="search" />}
          placeholder="Digite sua busca"
        />
      }
    >
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item?.username}
        />
      )}
    </Screen>
  );
}

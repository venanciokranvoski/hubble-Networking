import React from 'react';

import { Icon, Screen, Text, TextInput } from '@components';
import { AppScreenProps } from '@routes';
import { useDebounce } from '@hooks';
import { useUserSearch } from '@domain';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
    const [search, setSearch] = React.useState('');
    const debouncedSearch = useDebounce(search);

    const {list} = useUserSearch(debouncedSearch);
    return (
    <Screen
        canGoBack
        HeaderComponent={
        <TextInput
            value={search}
            onChangeText={setSearch}
            LeftComponent={<Icon color='gray3' name="search" />}
            placeholder='Digite sua busca'
        />
        }>
        <Text>Search Screen</Text>
        {list.map(user => (<Text  key={user.id} >{user.username}</Text>))}
    </Screen>
    );
}

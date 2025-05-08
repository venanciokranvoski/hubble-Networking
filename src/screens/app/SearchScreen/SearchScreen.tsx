import React from 'react';

import { Icon, Screen, Text, TextInput } from '@components';
import { AppScreenProps } from '@routes';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
    const [search, setSearch] = React.useState('');
    return (
    <Screen
        canGoBack
        HeaderComponent={
        <TextInput
            onChangeText={setSearch}
            LeftComponent={<Icon color='gray3' name="search" />}
        />
        }>
        <Text></Text>
    </Screen>
    );
}

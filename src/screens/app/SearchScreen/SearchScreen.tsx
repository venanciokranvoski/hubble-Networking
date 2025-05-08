import React from 'react';

import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';



export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
    return (
        <Screen>
            <Text>Search Screen </Text>
        </Screen>
    )
}
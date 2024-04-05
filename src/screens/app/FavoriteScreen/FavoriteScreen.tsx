import React from 'react';
import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text>Favorite</Text>
    </Screen>
  );
}

import React from 'react';
import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function MyProfileScreen(props: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text>Profile</Text>
    </Screen>
  );
}

import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';
import React from 'react';

export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text>NewPost</Text>
    </Screen>
  );
}

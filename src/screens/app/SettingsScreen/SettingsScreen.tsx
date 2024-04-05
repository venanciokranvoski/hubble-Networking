import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import React from 'react';

export function SettingsScreen({
  navigation,
}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
      <Button
        title="Settings"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
}

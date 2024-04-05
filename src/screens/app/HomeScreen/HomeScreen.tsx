import React from 'react';
import { Button, Screen, Text } from '@components';
import { AppScreenProps } from 'src/routes/navigationTypes';

export function HomeScreen({ navigation }: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreens')}
      ></Button>
    </Screen>
  );
}

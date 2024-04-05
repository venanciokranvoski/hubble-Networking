import { Screen, Text } from '@components';
import React from 'react';
import { AppScreenProps } from 'src/routes/navigationTypes';

export function SettingsScreens(props: AppScreenProps<'SettingsScreens'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screens</Text>
    </Screen>
  );
}

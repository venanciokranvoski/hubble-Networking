import { Button, Screen, Text } from '@components';
import { useAuthSignOut, userService } from '@domain';
import { AppScreenProps } from '@routes';
import React from 'react';
import { authService } from 'src/domain/Auth/authService';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const { signOut } = useAuthSignOut();
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Setting</Text>
      <Button title="Exit app" onPress={signOut} />
    </Screen>
  );
}

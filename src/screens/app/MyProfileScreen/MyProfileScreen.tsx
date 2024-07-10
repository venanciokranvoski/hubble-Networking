import React from 'react';
import { Box, Icon, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import { useAuthCredentials } from '@services';

export function MyProfileScreen({
  navigation,
}: AppScreenProps<'MyProfileScreen'>) {
  const { authCredentials } = useAuthCredentials();
  const name = authCredentials?.user.fullName;
  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {name && <Text preset="headingMedium">{name}</Text>}
        <Icon
          name="setting"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      </Box>
    </Screen>
  );
}

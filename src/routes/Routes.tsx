import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack, AuthStack } from '@routes';
import { useAuthCredentials } from '@services';
import { Activityindicator, Box } from '@components';

export function Router() {
  // const authenticated = false;
  const { authCredentials, isLoading } = useAuthCredentials();

  if (isLoading) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center"
      >
        <Activityindicator size={'large'} />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

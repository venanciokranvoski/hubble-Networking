import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthCredentials } from '@services';
import { Activityindicator, Box } from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {OnbordingStack} from './OnbordingStack';
import {Stacks, useRouter} from './useRouter';


  function IsLoadingScreen() {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center"
      >
        <Activityindicator color='primary' size={'large'} />
      </Box>
    );
  }

  const stacks: Record<Stacks, React.ReactElement> = {
    loading: <IsLoadingScreen />,
    Auth: <AuthStack />, 
    App: <AppStack />,
    Onbording: <OnbordingStack />
  }

  export function Router(){
    const stack = useRouter();

    const Stack = stacks[stack];

    return <NavigationContainer>{Stack}</NavigationContainer>
  }



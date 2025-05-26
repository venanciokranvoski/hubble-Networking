import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Router } from '@routes';
import { Toast } from '@components';
import { AuthCredentialsProvider } from './src/services/authCredentials/Providers/AuthCredentialsProviders';
import {initializeStorage} from './src/services/Storage';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKVStorage } from './src/services/Storage/implementation/MMKVStorage';

// import reactotron from './src/config/Reactotron';

initializeStorage(MMKVStorage)


// if (__DEV__) reactotron.connect();
const queryClientVenon = new QueryClient();

function App(): JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClientVenon}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            {/* <ToastProvider> */}
              <Router />
              <Toast />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}
export default App;

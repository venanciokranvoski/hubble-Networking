import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { Router } from '@routes';
import { Toast } from '@components';
import { AuthCredentialsProvider } from './src/services/authCredentials/Providers/AuthCredentialsProviders';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAppColorShema } from './src/hooks/useAppColorShema';
import { settingsService, useAppColor } from '@services';
import {initializeStorage, MMKVStorage} from './src/services/Storage';
import {darkTheme, theme} from './src/theme/theme';

// import reactotron from './src/config/Reactotron';

initializeStorage(MMKVStorage);


// if (__DEV__) reactotron.connect();
const queryClientVenon = new QueryClient();

function App(): JSX.Element {
  useAppColorShema();
  const appColor = useAppColor();

  React.useEffect(()=> {
    settingsService.handleStatusBar(appColor);
  },[appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClientVenon}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
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

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Router } from '@routes';
import { Toast } from '@components';
import reactotron from './src/config/Reactotron';
import { ToastProvider } from '@services';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (__DEV__) reactotron.connect();
const queryClientVenon = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClientVenon}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <Router />
            <Toast />
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
export default App;

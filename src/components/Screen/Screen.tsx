import React from 'react';
import { Box, ScrollViewContainer, ViewContainer, BoxProps } from '@components';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScreenComponent } from './components/ScreenComtainer';
import { useAppSafeArea, useAppTheme } from '@hooks';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  HeaderComponent,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}>
      <Container backgroundColor={colors.grayWhite}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]} // Margin style
          {...boxProps}
        >
          {canGoBack && <ScreenComponent canGoBack={canGoBack} title={title} HeaderComponent={HeaderComponent} />}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

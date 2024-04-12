import React from 'react';
import {
  Box,
  TouchableOpacityVenon,
  Icon,
  Text,
  ScrollViewContainer,
  ViewContainer,
  BoxProps,
} from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container backgroundColor={colors.grayWhite}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]} // Margin style
          {...boxProps}
        >
          {canGoBack && (
            <TouchableOpacityVenon
              flexDirection="row"
              marginBottom="s24"
              alignItems="center"
            >
              <Icon
                name="arrowLeftIcon"
                color="primary"
                onPress={navigation.goBack}
              />
              <Text preset="paragraphMedium" semiBold ml="s10">
                Voltar
              </Text>
            </TouchableOpacityVenon>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

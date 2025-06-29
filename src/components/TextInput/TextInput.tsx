import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';
import { useAppTheme } from '../../hooks/useAppTheme';
import { colors } from '@theme';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxSetting?: BoxProps;
  containerProps?: BoxProps
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  LeftComponent,
  boxSetting,
  containerProps,
  ...rnTextInputProps
}: TextInputProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    flexDirection: 'row',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box flexGrow={1} flexShrink={1} {...boxSetting}>
      <Pressable onPress={focusInput}>
        {label && (
          <Text marginBottom="s4" color="grayBlack" preset="paragraphMedium">
                {label}
          </Text>
        )}
        <Box {...$textInputContainer} {...containerProps} backgroundColor='grayWhite'>
          {LeftComponent&& (
            <Box justifyContent="center" mr="s16">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            {...rnTextInputProps}
            style={$textInputStyle}
            autoCapitalize="none"
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        <Text color="error" preset="paragraphSmall" bold>
          {errorMessage}
        </Text>
      </Pressable>
    </Box>
  );
}

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  color: colors.palette.grayBlack, 
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

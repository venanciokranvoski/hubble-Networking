import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { $textInputStyle } from '@components';

interface TextInputProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...RNTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const disableMessage = value?.trim().length === 0;

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Pressable onPress={focusInput}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        alignItems="center"
      >
        <RNTextInput
          style={$textInputStyle}
          ref={inputRef}
          // placeholderTextColor={colors.gray}
          // style={$TextInputStyle}
          {...RNTextInputProps}
        />
        <Pressable disabled={disableMessage} onPress={()=> onPressSend(value || '')}>
          <Text color={disableMessage ? 'gray2' : 'greenvPrimary'}>Enviar</Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}

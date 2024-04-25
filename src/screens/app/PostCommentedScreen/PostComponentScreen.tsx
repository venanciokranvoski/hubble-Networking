import React from 'react';
import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function PostCommentScreen({}: AppScreenProps<'PostCommentedScreen'>) {
  return (
    <Screen title="Comentarios" canGoBack>
      <Box>
        <Text>Tela de Comentarios</Text>
      </Box>
    </Screen>
  );
}

import React from 'react';
import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import { usePostCommentList } from '@post';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentedScreen'>) {
  // const postID = route.params.postId;
  const postID = route.params.postID;

  const { list } = usePostCommentList(postID);

  return (
    <Screen title="Comentarios" canGoBack>
      <Box>
        <Text>Tela de Comentarios</Text>
      </Box>
    </Screen>
  );
}

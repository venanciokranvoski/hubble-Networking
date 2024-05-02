import { Text } from '@components';
import React from 'react';
import { Pressable } from 'react-native';

interface Props {
  nextPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentedBottom({ nextPage, hasNextPage }: Props) {
  return (
    <Pressable onPress={nextPage}>
      {hasNextPage ? (
        <Text bold textAlign="center" color="primary">
          Ver mais
        </Text>
      ) : null}
    </Pressable>
  );
}

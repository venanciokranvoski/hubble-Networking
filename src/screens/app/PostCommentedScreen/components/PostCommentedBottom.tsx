import { Text } from '@components';
import React from 'react';
import { Pressable } from 'react-native';

interface Props {
  nextPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentedBottom({ nextPage, hasNextPage }: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={nextPage} style={{ marginBottom: 35 }}>
        <Text bold textAlign="center" color="primary">
          Ver mais
        </Text>
      </Pressable>
    );
  }
  return null;
}

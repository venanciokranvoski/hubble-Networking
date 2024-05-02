import { ProfileAvatar, Text } from '@components';
import { Post } from '@domain';
import React from 'react';
import { Box } from '@components';

type Props = Pick<Post, 'author'>;
export function PostHeader({ author }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  );
}

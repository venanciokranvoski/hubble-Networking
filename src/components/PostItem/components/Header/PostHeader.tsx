import { ProfileAvatar, Text } from '@components';
import { Post } from '@domain';
import React from 'react';
import { Box } from '@components';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

type Props = Pick<Post, 'author'>;
export function PostHeader({ author }: Props) {
  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('MyProfileScreen', { userId: author.id });
  }

  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}

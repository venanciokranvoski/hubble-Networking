import React from 'react';
import { Box, Icon, IconProps, Text, TouchableOpacityVenon } from '@components';
import { Post } from '@domain';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //
  }

  function commentPost() {
    //
  }

  function favoriteLikes() {}

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
      />
      <Item
        marked={false}
        onPress={commentPost}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
      />
      <Item
        marked
        onPress={favoriteLikes}
        icon={{
          default: 'bookMark',
          marked: 'bookMarkFill',
        }}
        text={favoriteCount}
      />
    </Box>
  );
}

// Small component
interface ItemProps {
  text: number;
  marked: boolean;
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({ onPress, icon, marked, text }: ItemProps) {
  return (
    <TouchableOpacityVenon
      flexDirection="row"
      alignItems="center"
      onPress={onPress}
      marginRight="s24"
    >
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityVenon>
  );
}

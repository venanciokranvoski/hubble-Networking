import {
  Box,
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  ProfileAvatarProps,
  Text,
} from '@components';
import { User } from '@domain';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { GestureResponderEvent } from 'react-native';

type ProfileUserProps = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarSize?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>;
  RightComponent?: React.ReactElement;
} & PressableBoxProps;
export function ProfileUser({
  user,
  avatarSize,
  RightComponent,
  onPress,
  ...PressableBoxProps
}: ProfileUserProps) {
  const navigation = useNavigation();

  function navigateToProfile(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigation.navigate('MyProfileScreen', { userId: user.id });
  }

  return (
    <PressableBox
      alignItems="center"
      justifyContent='space-between'
      mb="s18"
      flexDirection="row"
      onPress={navigateToProfile}
      {...PressableBoxProps}
    >
      <Box flexDirection="row" alignItems='center'>
        <ProfileAvatar {...avatarSize} imageURL={user.profileUrl} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}

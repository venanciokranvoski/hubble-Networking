import React from 'react';
import { Pressable } from 'react-native';
import { ThemeColors } from '@theme';
import { useAppTheme } from '@hooks';
import { EyeOffIcon } from '../../Icons/EyeOffIcon';
import { ArrowLeftIcon } from '../../Icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../Icons/ArrowRightIcon';
import { BellIcon } from '../../Icons/BellIcon';
import { BellOnIcon } from '../../Icons/BellOnIcon';
import { BookmarkFillIcon } from '../../Icons/BookmarkFillIcon';
import { BookmarkIcon } from '../../Icons/BookmarkIcon';
import { CameraIcon } from '../../Icons/CameraIcon';
import { ChatIcon } from '../../Icons/ChatIcon';
import { ChatOnIcon } from '../../Icons/ChatOnIcon';
import { CheckIcon } from '../../Icons/CheckIcon';
import { ChevronRightIcon } from '../../Icons/ChevronRightIcon';
import { CommentIcon } from '../../Icons/CommentIcon';
import { EyeOnIcon } from '../../Icons/EyeOnIcon';
import { FlashOffIcon } from '../../Icons/FlashOffIcon';
import { FlashOnIcon } from '../../Icons/FlashOnIcon';
import { HeartFill } from '../../Icons/heartFill1';
import { HeartIcon } from '../../Icons/HeartIcon';
import { HomeFillIcon } from '../../Icons/HomeFillIcon';
import { HomeIcon } from '../../Icons/HomeIcon';
import { MessageIcon } from '../../Icons/MessageIcon';
import { NewPostIcon } from '../../Icons/NewPostIcon';
import { ProfileFillIcon } from '../../Icons/ProfileFillIcon';
import { Profile } from '../../Icons/Profile';
import { SearchIcon } from '../../Icons/SearchIcon';
import { SettingsIcon } from '../../Icons/SettingsIcon';
import { TrashIcon } from '../../Icons/TrashIcon';
import { CheckRoundIcon } from '../../Icons/CheckroundIcon';
import { MessageRoundIcon } from '../../Icons/MessageRound';
import { ErrorIcon } from '../../Icons/ErrorIcon';
import { Camera_click } from  '../../Icons/Camera_click';

export interface iconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name?: IconName;
  color?: ThemeColors;
  fillColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'grayBlack',
  fillColor = 'background',
  size,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = IconRegister[name];

  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor: colors[fillColor],
  };

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }
  return <SVGIcon {...iconProps} />;
}

const IconRegister = {
  eyeOF: EyeOffIcon,
  arrowLeftIcon: ArrowLeftIcon,
  arrowRightIcon: ArrowRightIcon,
  bellIcon: BellIcon,
  bellOn: BellOnIcon,
  bookMarkFill: BookmarkFillIcon,
  bellOnFill: BellOnIcon,
  bookMark: BookmarkIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  chevronR: ChevronRightIcon,
  comment: CommentIcon,
  eyeON: EyeOnIcon,
  flashOF: FlashOffIcon,
  flashON: FlashOnIcon,
  heart: HeartIcon,
  heartFill: HeartFill,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  newPost: NewPostIcon,
  profile: Profile,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  setting: SettingsIcon,
  trash: TrashIcon,
  CheckRoundIcon: CheckRoundIcon,
  MessageRoundIcon: MessageRoundIcon,
  ErrorIcon: ErrorIcon,
  CameraClick: Camera_click
};

type IconType = typeof IconRegister;

type IconName = keyof IconType;

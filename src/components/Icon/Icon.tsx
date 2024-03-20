import React, { Profiler } from "react";
import { Pressable } from "react-native";
import { ThemeColors } from "../../theme/theme";
import { useAppTheme } from "../../hooks/useAppTheme";
import { EyeOffIcon } from "../../Icons/EyeOffIcon";
import { ArrowLeftIcon } from "../../Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../Icons/ArrowRightIcon";
import { BellIcon } from "../../Icons/BellIcon";
import { BellOnIcon } from "../../Icons/BellOnIcon";
import { BookmarkFillIcon } from "../../Icons/BookmarkFillIcon";
import { BookmarkIcon } from "../../Icons/BookmarkIcon";
import { CameraIcon } from "../../Icons/CameraIcon";
import { ChatIcon } from "../../Icons/ChatIcon";
import { ChatOnIcon } from "../../Icons/ChatOnIcon";
import { CheckIcon } from "../../Icons/CheckIcon";
import { ChevronRightIcon } from "../../Icons/ChevronRightIcon";
import { CommentIcon } from "../../Icons/CommentIcon";
import { EyeOnIcon } from "../../Icons/EyeOnIcon";
import { FlashOffIcon } from "../../Icons/FlashOffIcon";
import { FlashOnIcon } from "../../Icons/FlashOnIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { HomeFillIcon } from "../../Icons/HomeFillIcon";
import { HomeIcon } from "../../Icons/HomeIcon";
import { HeartFillIcon } from "../../Icons/HeartFillIcon";
import { MessageIcon } from "../../Icons/MessageIcon";
import { NewPostIcon } from "../../Icons/NewPostIcon";
import { ProfileFillIcon } from "../../Icons/ProfileFillIcon";
import { SearchIcon } from "../../Icons/SearchIcon";
import { SettingsIcon } from "../../Icons/SettingsIcon";
import { TrashIcon } from "../../Icons/TrashIcon";
import { CheckRoundIcon } from "../../Icons/CheckroundIcon";
import { MessageRoundIcon } from "../../Icons/MessageRound";

export interface iconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({ name, color = "grayBlack", size, onPress }: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = IconRegister[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
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
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  newPost: NewPostIcon,
  profile: Profiler,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  setting: SettingsIcon,
  trash: TrashIcon,
  CheckRoundIcon: CheckRoundIcon,
  MessageRoundIcon: MessageRoundIcon,
};

type IconType = typeof IconRegister;

type IconName = keyof IconType;

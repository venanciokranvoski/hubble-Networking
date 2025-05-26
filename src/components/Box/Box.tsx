import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
  PressableProps
} from "react-native";
import { Theme } from "../../theme/theme";
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  spacing,
  layout,
  border,
  BackgroundColorProps,
  SpacingProps,
  LayoutProps,
  BorderProps,
  SpacingShorthandProps,
  spacingShorthand,
} from "@shopify/restyle";

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;
 
type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> 

export type TouchableOpacityVenonProps = 
  RNTouchableOpacityProps & RestyleTypes;

export const TouchableOpacityVenon = createRestyleComponent<
  TouchableOpacityVenonProps,
  Theme
>([backgroundColor, spacing, layout, border], TouchableOpacity);


export type PressableBoxProps = PressableProps & RestyleTypes;
export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor,spacing, spacingShorthand, layout, border],
  TouchableOpacity
)

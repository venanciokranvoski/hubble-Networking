import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
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
} from "@shopify/restyle";

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityVenonProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

export const TouchableOpacityVenon = createRestyleComponent<
  TouchableOpacityVenonProps,
  Theme
>([backgroundColor, spacing, layout, border], TouchableOpacity);

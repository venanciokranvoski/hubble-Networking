import React from "react";
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivictyIndicator,
} from "react-native";
import { Theme, ThemeColors } from "../../theme/theme";
import { useTheme } from "@shopify/restyle";

interface Props extends Omit<ActivityIndicatorProps, "color"> {
  color: ThemeColors;
}

export function Activityindicator({ color }: Props) {
  const { colors } = useTheme<Theme>();
  return <RNActivictyIndicator color={colors[color]} />;
}

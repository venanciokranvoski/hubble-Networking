import React from "react";
import {
  Text,
  TouchableOpacityVenon,
  TouchableOpacityVenonProps,
} from "@components";
import { ActivityIndicator } from "react-native";
import { buttonPresets } from "./ButtonPresets";
// +++++++++++++++++
// UI
// preset: primary secondary
// default, disabled
// +++++++++++++++++
export type ButtonPreset = "primary" | "outline" | "ghost";

 export interface ButtonProps extends TouchableOpacityVenonProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = "primary",
  disabled,
  ...touchableOpacityVenonProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? "disabled" : "default"];
  return (
    <TouchableOpacityVenon
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s12"
      {...buttonPreset.container}
      {...touchableOpacityVenonProps}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content.color} {...buttonPreset.content.textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacityVenon>
  );
}

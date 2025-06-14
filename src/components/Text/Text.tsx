import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import { createText } from "@shopify/restyle";
import { Theme } from "@theme";

const SRText = createText<Theme>();
export type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  preset = "paragraphMedium",
  bold,
  italic,
  semiBold,
  style,
  ...SrTextProps
}: TextProps) {
  // Merginando as cores do Component
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], { fontFamily }, style]}
      {...SrTextProps}
    >
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean
) {
  if (
    preset === "headingLarge" ||
    preset === "headingMedium" ||
    preset === "headingSmall"
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }
  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
  // if (bold && italic){
  //   return $fontFamily.boldItalic
  // }

  // if (bold){
  //   return $fontFamily.bold;
  // }

  // if (italic){
  //   return $fontFamily.italic;
  // }

  // if (semiBold && italic){
  //   return $fontFamily.mediumItalic;
  // }

  // if (semiBold){
  //   return $fontFamily.medium;
  // }

  // return $fontFamily.regular;
}

type TextVariants =
  | "headingLarge"
  | "headingMedium"
  | "headingSmall"
  | "paragraphMedium"
  | "paragraphLarge"
  | "paragraphSmall"
  | "paragraphCaption"
  | "paragraphCaptionSmall";

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphCaption: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  paragraphCaptionSmall: { fontSize: 12, lineHeight: 16.8 },
};

export const $fontFamily = {
  black: "Satoshi-Black",
  blackItalic: "Satoshi-BlackItalic",
  bold: "Satoshi-Bold",
  boldItalic: "Satoshi-BoldItalic",
  italic: "Satoshi-Italic",
  Light: "Satoshi-Light",
  LightItalic: "Satoshi-LightItalic",
  medium: "Satoshi-Medium",
  mediumItalic: "Satoshi-MediumItalic",
  regular: "Satoshi-Regular",
};

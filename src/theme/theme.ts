import { createTheme } from '@shopify/restyle';
import { ViewStyle } from 'react-native';

export const palette = {
  greenvPrimary: '#074C4E',
  greenvPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenvSuccess: '#4ABC86',
  greenvSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  grayBlack: '#000000',
  grayblack70: 'rgba(0,0,0,0.6)',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#838383',
  gray4: '#E1E1E1',
  gray5: '#f5f5f5',
  grayWhite: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)'
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenvPrimary,
    primaryContrast: palette.greenvPrimaryLight,

    background: palette.redError,
    backgroundContrast: palette.redErrorLight,

    buttonPrimary: palette.greenvPrimary,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    sucess: palette.greenvSuccess,
    sucessLight: palette.greenvSuccessLight,

    defaultText: palette.grayBlack,
    market: palette.carrotSecondary,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
    s18: 18,
  },
  textVariants: {
    defaults: {},
  },
});

// sombra IOS and Android

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];

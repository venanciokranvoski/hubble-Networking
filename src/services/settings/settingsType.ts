import { ColorSchemeName } from "react-native";

export type AppColorSchema = 'light' | 'dark';

export type ThemePreference = AppColorSchema | 'system';

export type SettingStore = {
    appTheme: AppColorSchema;
    themePreference: ThemePreference;
    showOnbording: boolean;
    setThemePreference: (themePreference: ThemePreference) => void;
    onSystemChange: (color: ColorSchemeName) => void;
    finishOnbording: ()=> void;
}
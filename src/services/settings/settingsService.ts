import {Appearance, ColorSchemeName, Platform, StatusBar} from 'react-native';
import BootSplash from 'react-native-bootsplash';

import {AppColorSchema, ThemePreference} from './settingsType';
import { colors } from '@theme';

function onThemePreference(themePreference: ThemePreference): AppColorSchema {
    if(themePreference === 'system'){
        const colorSheme = Appearance.getColorScheme();
        return  colorSheme ? colorSheme : 'light';
    }

    return themePreference;
}

function onSystemChange(color: ColorSchemeName, themePreference: ThemePreference): AppColorSchema | null {
    if(themePreference === 'system'){
        return color ? color : 'light';
    }
    return null;
}


function handleStatusBar(appColor: AppColorSchema){
    StatusBar.setBarStyle(
        appColor === 'dark' ? 'light-content' : 'dark-content',
    );

    if(Platform.OS === 'android'){
        StatusBar.setBackgroundColor(
            appColor === 'dark' ? colors.palette.grayBlack : colors.palette.grayWhite,
        );
    }
}

async function hideSplashScreen(){
    try {
        const isVisible = await BootSplash.isVisible();
        if(isVisible){
            BootSplash.hide({fade: true})
        }
    } catch (error) {
        BootSplash.hide();        
    }
}

export const settingsService = {
        onThemePreference,
        onSystemChange,
        handleStatusBar,
        hideSplashScreen
    };
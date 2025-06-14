import { create } from "zustand";
import { persist } from "zustand/middleware";

import { storage  } from "../Storage";

import {settingsService} from './settingsService';
import {AppColorSchema, SettingStore,ThemePreference} from './settingsType';



const useSettingStore = create<SettingStore>()(
    persist(
        (set, get) => ({
            showOnbording: true,
            appTheme: "light",
            themePreference: 'system',
            onSystemChange: color =>  {
                const updatedAppTheme = settingsService.onSystemChange(
                    color,
                    get().themePreference,
                );
                if(updatedAppTheme){
                    set({appTheme: updatedAppTheme})
                }
            },
            setThemePreference: newThemePreference => {
                const updatedAppTheme = settingsService.onThemePreference(newThemePreference);
                set({appTheme: updatedAppTheme, themePreference: newThemePreference});
            },
            finishOnbording: () => {
                set({showOnbording: false})
            },
        }),
        {
            name: '@Settings',
            storage: storage,
        },
    ),
);


export function useAppColor(): AppColorSchema {
    const appTheme = useSettingStore(state => state.appTheme);
    return appTheme;
}

export function useThemePreference(): ThemePreference {
    const themePreference = useSettingStore(state => state.themePreference);
    return themePreference;
}

export function useShowOnbording(): boolean {
    const showOmbording = useSettingStore(state => state.showOnbording);
    return showOmbording;
}

export function useSettingService(): Pick<SettingStore, 'setThemePreference' | 'onSystemChange' | 'finishOnbording'>{
    const setThemePreference = useSettingStore(
        state => state.setThemePreference,
    );
    const onSystemChange = useSettingStore(state => state.onSystemChange);

    const finishOnbording = useSettingStore(state => state.finishOnbording);


    return {
        setThemePreference,
        onSystemChange,
        finishOnbording
    }
}


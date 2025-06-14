import React from "react";

import {RadioButtonSelector, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';
import { useSettingService, useThemePreference } from "@services";


type ThemePreference = 'light' | 'dark' | 'system';


    type Option = {
        label: string;
        description?: string;
        themePreference: ThemePreference;
    }

const items: Option[] = [
    {
        label: 'Ativado',
        themePreference: 'dark',
    },
    {
        label: 'Desativado',
        themePreference: 'light'
    },
    {
        label: 'Padrão do sistema',
        description:'A aparecendi sera a mesma que voce configurou no seu dispositivo',
        themePreference: 'system'
    }
]



export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>){
    const themePreference = useThemePreference();
    const {setThemePreference} = useSettingService();

    const selectedItem = items.find(
        item => item.themePreference === themePreference,
    );

    function setSelectedItem(item: Option){
        setThemePreference(item.themePreference);
    }
    return (
        <Screen canGoBack title="Modo escuro">
            <RadioButtonSelector 
                items={items}
                selectedItem={selectedItem}
                onSelected={setSelectedItem}
                labelKey='label'
                valueKey="themePreference"
                descriptionKey="description"
            />
        </Screen>
    )
}
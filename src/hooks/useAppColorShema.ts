import React from 'react'
import {Appearance} from 'react-native';

import {useSettingService} from '@services';

export function useAppColorShema(){
    const { onSystemChange } = useSettingService();



    React.useEffect(()=> {
        onSystemChange(Appearance.getColorScheme());
    },[onSystemChange]);

    React.useEffect(() => {
        const sub = Appearance.addChangeListener(pref => {
            onSystemChange(pref.colorScheme);
        })

        return ()=> {
            sub.remove();
        }
    },[onSystemChange])

}
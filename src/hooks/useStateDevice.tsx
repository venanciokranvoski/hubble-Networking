//  hook of detected state of Device

import React, {useEffect, useState} from 'react';
import { AppState } from 'react-native';


export function useStateDevice(){
    const [_appState, setAppState] = useState(AppState.currentState);



    React.useEffect(()=> {
        const eventSub = AppState.addEventListener('change', state => {
            setAppState(state)
        })

        return eventSub.remove;
    },[]);

    return _appState;
}
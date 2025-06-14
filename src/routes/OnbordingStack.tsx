import React from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnbordingScreen} from '@screens';


export type OnbordingStackParamList = {
    OnbordingScreen: undefined;
};


const Stack = createNativeStackNavigator<OnbordingStackParamList>();

export function OnbordingStack(){
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: true,
            }}>
                <Stack.Screen name="OnbordingScreen" component={OnbordingScreen} />

        </Stack.Navigator>
    )
}
import React from "react";
// ====== Files config navigation =========
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../types/StackNavigatorTypes/StackNavigatorTypes";
// ======= Screens =======
import { LoginScreen } from "../screens/auth/LoginScreen/LoginScreen";
import { SignUpScreen } from "../screens/auth/SignUpScreen/SignUpScreen";
import { SucessScreen } from "../screens/auth/SucessScreen/SucessScreen";

const Stack = createNativeStackNavigator<RootStackParamlist>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SucessScreen" component={SucessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

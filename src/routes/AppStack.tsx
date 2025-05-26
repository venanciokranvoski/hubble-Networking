import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostCommentScreen, SettingsScreen, MyProfileScreen, SearchScreen } from '@screens';
import { AppTabBottomTabParamList, AppTabNavigator } from './AppTabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';



export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  SearchScreen: undefined;
  PostCommentedScreen: {
    postID: number;
    postAuthorId: number;
  };
  MyProfileScreen: {
    userId: number;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName: keyof AppStackParamList;
}

export function AppStack({initialRouteName = 'AppTabNavigator'}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator}  />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentedScreen" component={PostCommentScreen} />
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
    </Stack.Navigator>
  );
} /// criar tela

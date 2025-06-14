import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostCommentScreen, DarkModeScreen, SettingsScreen, SearchScreen, ProfileScreen, PublishedPostScreen, CameraScreen } from '@screens';
import { AppTabBottomTabParamList, AppTabNavigator } from './AppTabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';






export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  DarkModeScreen: undefined;
  SearchScreen: undefined;
  PostCommentedScreen: {
    postID: number;
    postAuthorId: number;
    showPost?: boolean;
  };
  ProfileScreen: {
    userId: number;
  };
  PublishedPostScreen:{
    imageURL: string;
  },
  CameraScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
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
      <Stack.Screen name="DarkModeScreen" component={DarkModeScreen} />
      <Stack.Screen name="PostCommentedScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
      <Stack.Screen name='PublishedPostScreen' component={PublishedPostScreen} />
      <Stack.Screen name='CameraScreen' component={CameraScreen} />
    </Stack.Navigator>
  );
} /// criar tela

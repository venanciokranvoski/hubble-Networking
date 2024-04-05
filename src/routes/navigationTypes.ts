import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from './AppStack';
import { AuthStackScreenProps } from '@routes';
import { CompositeScreenProps } from '@react-navigation/native';
import { AppTabBottomTabParamList } from './AppTabNavigator';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackScreenProps, AppStackParamList {}
  }
}

// interfaces Generics
export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AuthScreenProps<T extends keyof AuthStackScreenProps> =
  NativeStackScreenProps<AuthStackScreenProps, T>;

// Type of navegation <T> Anywhere Name
export type AppTabScreenProps<T extends keyof AppTabBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabBottomTabParamList, T>,
    NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
  >;

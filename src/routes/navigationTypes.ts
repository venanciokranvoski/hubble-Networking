import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from './AppStack';
import { AuthStackScreenProps } from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackScreenProps {}
  }
}

export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AuthScreenProps<T extends keyof AuthStackScreenProps> =
  NativeStackScreenProps<AuthStackScreenProps, T>;

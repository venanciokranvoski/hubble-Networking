import { RootStackParamlist } from "../types/StackNavigatorTypes/StackNavigatorTypes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamlist {}
  }
}

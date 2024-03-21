import { useNavigation } from "@react-navigation/native";
import { RootStackParamlist } from "../types/StackNavigatorTypes/StackNavigatorTypes";

export function useResetNavigationSucess() {
  const navigation = useNavigation();

  function reset(params: RootStackParamlist["SucessScreen"]) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: "LoginScreen",
        },
        {
          name: "SucessScreen",
          params,
        },
      ],
    });
  }

  return { reset };
}

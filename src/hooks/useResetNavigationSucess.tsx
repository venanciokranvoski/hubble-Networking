import { useNavigation } from '@react-navigation/native';
import { AuthScreenProps } from '@routes';

export function useResetNavigationSucess() {
  const navigation = useNavigation();

  function reset(params: AuthScreenProps<'SucessScreen'>) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SucessScreen',
          params,
        },
      ],
    });
  }

  return { reset };
}

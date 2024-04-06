import { IconProps } from '@components';
import { AppTabBottomTabParamList } from '@routes';
import { FavoriteScreen, MyProfileScreen, NewPostScreen } from '@screens';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    id?: number;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Inicio',
    id: 1,
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    id: 2,
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    id: 3,
    icon: {
      focused: 'bookMarkFill',
      unfocused: 'bookMark',
    },
  },
  MyProfileScreen: {
    label: 'Meu Perfil',
    id: 4,
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};

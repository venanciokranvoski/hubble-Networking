import React from 'react';
import { Button, Screen, Text } from '@components';
import { useAuthSignOut } from '@domain';
import { AppScreenProps } from '@routes';
import {FlatList, ListRenderItemInfo} from 'react-native';
import { MenuItem, MenuItensProps } from './components/MenuItem';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  const { signOut, isLoading } = useAuthSignOut();
  

  const items: MenuItensProps[] = [
    {label: 'Termos de uso', onPress: ()=> {}},
    {label: 'Politica de privacidade', onPress: ()=> {}},
    {label: 'Modo escuro', onPress: ()=> navigation.navigate('DarkModeScreen')}
  ]

  function renderItem({item}: ListRenderItemInfo<MenuItensProps>){
    return <MenuItem {...item} />
  }

  return (
    <Screen canGoBack flex={1} title='Configurações'>
      <FlatList 
        data={items}
        bounces={false}
        renderItem={renderItem}
      />
      <Button title="Exit app" onPress={signOut} />
    </Screen>
  );
}

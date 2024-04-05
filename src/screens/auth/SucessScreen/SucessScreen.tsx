import React from 'react';
import { Screen, Icon, Text, Button } from '@components';
import { AuthScreenProps } from '@routes';

export function SucessScreen({ route }: AuthScreenProps<'SucessScreen'>) {
  function goBackToBegin() {}
  return (
    <Screen>
      <Icon {...route.params.icon} onPress={goBackToBegin} />
      <Text preset="headingLarge" marginTop="s24" color="grayBlack">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16" color="grayBlack">
        {' '}
        {route.params.description}
      </Text>

      <Button onPress={() => {}} title="Voltar ao inicio" marginTop="s40" />
    </Screen>
  );
}

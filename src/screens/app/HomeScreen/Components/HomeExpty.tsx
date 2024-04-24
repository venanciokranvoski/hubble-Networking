import { Box, Button, Text } from '@components';
import React from 'react';
import { ActivityIndicator } from 'react-native';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}

export function HomeEmpty({ loading, error, refetch }: Props) {
  let component = (
    <Box>
      <Text preset="paragraphMedium">Não há publicações no seu feed 🤦‍♂️</Text>
    </Box>
  );

  if (loading) {
    component = (
      <Box>
        <ActivityIndicator size={'large'} color="primary" />
      </Box>
    );
  }

  if (error) {
    component = (
      <Box>
        <Text mb="s24" bold preset="paragraphMedium">
          Não foi possivel carregar o feed 😢{' '}
        </Text>
        <Button title="Recarregar" preset="outline" onPress={refetch} />
      </Box>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}

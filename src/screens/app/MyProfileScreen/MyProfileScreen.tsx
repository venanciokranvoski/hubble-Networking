import React from 'react';
import {
  Screen,
  Activityindicator,
  Text,
  Box,
  ProfileAvatar,
} from '@components';
import { AppScreenProps } from '@routes';
import { useUserGetById } from '@domain';

export function MyProfileScreen({ route }: AppScreenProps<'MyProfileScreen'>) {
  const userId = route.params.userId;
  const { isError, isLoading, user } = useUserGetById(userId);
  return (
    <Screen canGoBack>
      {isLoading && <Activityindicator color="primary" />}
      {isError && <Text>Erro ao carregar perfil do Usuario</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}

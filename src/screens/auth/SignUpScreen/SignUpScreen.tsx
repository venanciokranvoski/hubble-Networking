import React from 'react';
import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import { useResetNavigationSucess as useResetNavigationSuccess } from '@hooks';
import { useForm } from 'react-hook-form';
import { signUpSchemaValidation, SignUpSchema } from './signUpSchemaValidation';
import { zodResolver } from '@hookform/resolvers/zod';

export function SignUpScreen() {
  const { reset } = useResetNavigationSuccess();
  function createGoLogin() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é so fazer login na nossa plataforma',
      icon: {
        name: 'CheckRoundIcon',
        color: 'sucess',
      },
    });
  }

  const { control, handleSubmit, formState } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchemaValidation),
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s20">
        Criar sua conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxSetting={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxSetting={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxSetting={{ mb: 's20' }}
      />

      <FormPasswordInput
        name="password"
        control={control}
        label="Senha"
        placeholder="Digite sua senha"
        boxSetting={{ mb: 's20' }}
      />

      <Button onPress={createGoLogin} title="Criar uma conta" />
    </Screen>
  );
}

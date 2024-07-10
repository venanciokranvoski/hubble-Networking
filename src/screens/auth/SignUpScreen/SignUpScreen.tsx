import React from 'react';
import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';

import { useForm } from 'react-hook-form';
import { signUpSchemaValidation, SignUpSchema } from './signUpSchemaValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthScreenProps, AuthStackScreenProps } from '@routes';
import { useResetNavigationSucess } from '@hooks';
import { useAuthSignUp } from '@domain';

const resetParams: AuthStackScreenProps['SucessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é so fazer login na nossa plataforma',
  icon: {
    name: 'CheckRoundIcon',
    color: 'sucess',
  },
};

const defaultValues: SignUpSchema = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const { reset } = useResetNavigationSucess();
  const { signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset(resetParams);
    },
  });

  const { control, handleSubmit, formState } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchemaValidation),
    defaultValues,
    mode: 'onChange',
  });

  function submitForm(formValue: SignUpSchema) {
    signUp(formValue);
  }

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
        name="firstName"
        label="Nome"
        placeholder="Digite seu nome completo"
        boxSetting={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="lastName"
        label="Sobrenome"
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

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Criar uma conta"
        loading={isLoading}
      />
    </Screen>
  );
}

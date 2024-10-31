import React from 'react';
import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';

import { useForm, useWatch } from 'react-hook-form';
import { signUpSchemaValidation, SignUpSchema } from './signUpSchemaValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthScreenProps, AuthStackScreenProps } from '@routes';
import { useResetNavigationSucess } from '@hooks';
import { useAuthSignUp } from '@domain';
import { ActivityIndicator } from 'react-native';
import { useAsyncValidation } from './useAsyncValidation';


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

  const { control, handleSubmit, formState, watch, getFieldState } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchemaValidation),
    defaultValues,
    mode: 'onChange',
  });

  function submitForm(formValue: SignUpSchema) {
    signUp(formValue);
  }

  const {usernameValidation, emailValidation } = useAsyncValidation({watch, getFieldState})

  // const username = watch('username');
  // const usernameState = getFieldState('username');
  // const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  // const userNameQuery = useAuthIsUsernamAvailable({username, 
  //   enabled:  usernameIsValid
  // });

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s20">
        Criar sua conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        errorMessage={usernameValidation.errorMessage}
        placeholder="@"
        boxSetting={{ mb: 's20' }}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size={"small"}  />
          ) : undefined
        }
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
        disabled={!formState.isValid || usernameValidation.notReady || emailValidation.notReady}
        title="Criar uma conta"
        loading={isLoading}
      />
    </Screen>
  );
}

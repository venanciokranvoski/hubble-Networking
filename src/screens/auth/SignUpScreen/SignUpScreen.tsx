import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";
import { useForm, Controller } from "react-hook-form";
import { SignUpFormType } from "./SignUpFormType";
import { FormTextInput } from "../../../components/Form/Form";

export function SignUpScreen() {
  const { reset } = useResetNavigationSucess();
  function createGoLogin() {
    reset({
      title: "Sua conta foi criada com sucesso!",
      description: "Agora é so fazer login na nossa plataforma",
      icon: {
        name: "CheckRoundIcon",
        color: "sucess",
      },
    });
  }

  const { control, handleSubmit, formState } = useForm<SignUpFormType>({
    defaultValues: {
      nameFull: "",
      username: "",
      email: "",
      password: "",
      password_repeat: "",
    },
  });

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s20">
        Criar sua conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        rules={{ required: "Username Obrigatório!" }}
        label="Username"
        placeholder="@"
        boxSetting={{ mb: "s20" }}
      />

      <Controller
        control={control}
        name="username"
        rules={{
          required: "userName obrigatório!",
        }}
        render={({ field, fieldState }) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            onChangeText={field.onChange}
            value={field.value}
            label="Seu username"
            placeholder="@"
            boxSetting={{ mb: "s20" }}
          />
        )}
      />

      <Controller
        control={control}
        name="nameFull"
        rules={{
          required: "Nome Completo obrigatório!",
        }}
        render={({ field, fieldState }) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="Nome completo"
            placeholder="Digite seu nome completo"
            boxSetting={{ mb: "s20" }}
          />
        )}
      />

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxSetting={{ mb: "s20" }}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        boxSetting={{ mb: "s20" }}
      />
      <PasswordInput
        label="Nova senha"
        placeholder="Digite novamente sua senha"
        boxSetting={{ mb: "s10" }}
      />

      <Button onPress={createGoLogin} title="Criar uma conta" />
    </Screen>
  );
}

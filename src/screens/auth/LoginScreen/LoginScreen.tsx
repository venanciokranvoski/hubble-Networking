import React from "react";
import { Alert, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../../../types/StackNavigatorTypes/StackNavigatorTypes";
import { LoginFormType } from "./LoginFormTypes";

type ScreenProps = NativeStackScreenProps<RootStackParamlist, "LoginScreen">;

export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate("SignUpScreen");
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate("ForgotPasswordScreen");
  }

  function handleAuthForm({ email, password }: LoginFormType) {
    Alert.alert("EMAIL:" + email + " SENHA : " + password);
  }

  const { control, formState, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <Screen>
      <View style={{ paddingHorizontal: 24 }}>
        <Text color="grayBlack" marginBottom="s8" preset="headingLarge">
          Olá
        </Text>
        <Text color="grayBlack" preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <Controller
          control={control}
          name="email"
          rules={{
            required: "E-mail Obrigatório!",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Email inválido",
            },
          }}
          render={({ field, fieldState }) => (
            <TextInput
              errorMessage={fieldState.error?.message}
              onChangeText={field.onChange}
              value={field.value}
              label="E-mail"
              placeholder="Digite seu E-mail"
              boxSetting={{ marginBottom: "s20" }}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: "Senha obrigatória",
            minLength: {
              value: 6,
              message: "É permitido criar senhas acima de 6 caracteres!",
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Senha"
              label="Sua senha"
              boxSetting={{ marginBottom: "s10" }}
            />
          )}
        />

        <Text
          onPress={navigateToForgotPasswordScreen}
          mt="s10"
          color="primary"
          preset="paragraphSmall"
          bold
        >
          Esqueci minha senha
        </Text>

        <Button
          onPress={handleSubmit(handleAuthForm)}
          disabled={!formState.isValid}
          title="Entrar"
          marginTop="s48"
        />
        <Button
          preset="outline"
          title="Criar uma conta"
          marginTop="s12"
          onPress={navigateToSignUpScreen}
        />
      </View>
    </Screen>
  );
}

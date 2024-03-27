import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { RootStackParamlist } from "../../../types/StackNavigatorTypes/StackNavigatorTypes";
import {
  LoginShemaValidation,
  loginShemaValidation,
} from "./loginShemaValidation";

type ScreenProps = NativeStackScreenProps<RootStackParamlist, "LoginScreen">;

export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate("SignUpScreen");
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate("ForgotPasswordScreen");
  }

  function handleAuthForm({ email, password }: LoginShemaValidation) {
    Alert.alert("EMAIL:" + email + " SENHA : " + password);
  }

  const { control, formState, handleSubmit } = useForm<LoginShemaValidation>({
    resolver: zodResolver(loginShemaValidation),
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

        <FormTextInput
          name="email"
          control={control}
          label="E-mail"
          placeholder="E-mail"
          boxSetting={{ mb: "s20" }}
        />

        <FormPasswordInput
          name="password"
          control={control}
          label="Senha"
          placeholder="Digite sua senha"
          boxSetting={{ mb: "s20" }}
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

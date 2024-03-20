import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../../../types/StackNavigatorTypes/StackNavigatorTypes";

type ScreenOptionsNav = NativeStackScreenProps<
  RootStackParamlist,
  "SignUpScreen"
>;

export function SignUpScreen({ navigation }: ScreenOptionsNav) {
  function createGoLogin() {
    navigation.navigate("SucessScreen", {
      title: "Sua conta foi criada com sucesso!",
      description: "Agora é so fazer login na nossa plataforma",
      icon: {
        name: "CheckRoundIcon",
        color: "sucess",
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s20">
        Criar sua conta
      </Text>
      <TextInput
        label="Seu userName "
        placeholder="@"
        boxSetting={{ mb: "s20" }}
      />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxSetting={{ mb: "s20" }}
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

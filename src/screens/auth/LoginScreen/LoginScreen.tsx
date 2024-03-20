import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../../../types/StackNavigatorTypes/StackNavigatorTypes";

type ScreenProps = NativeStackScreenProps<RootStackParamlist, "LoginScreen">;

export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate("SignUpScreen");
  }
  return (
    <Screen>
      <View style={{ paddingHorizontal: 24 }}>
        <Text color="grayBlack" marginBottom="s8" preset="headingLarge">
          Olá
        </Text>
        <Text color="grayBlack" preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>
        <TextInput
          label="E-mail"
          placeholder="Digite seu E-mail"
          boxSetting={{ marginBottom: "s20" }}
        />

        <PasswordInput
          placeholder="Senha"
          label="Sua senha"
          boxSetting={{ marginBottom: "s10" }}
        />

        <Text mt="s10" color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>

        <Button title="Entrar" marginTop="s48" />
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

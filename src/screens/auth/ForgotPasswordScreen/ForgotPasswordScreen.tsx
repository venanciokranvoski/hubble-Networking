import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";

export function ForgotPasswordScreen() {
  const { reset } = useResetNavigationSucess();
  function submitForm() {
    reset({
      title: "Enviamos as instruções para seu e-mail",
      description:
        "Clique no link enviado no seu email para recuperar sua senha",
      icon: {
        name: "MessageRoundIcon",
        color: "primary",
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" color="grayBlack" mb="s16">
        Esqueci minha {"\n"}senha
      </Text>
      <Text preset="paragraphLarge" color="grayBlack" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxSetting={{ marginBottom: "s40" }}
      />

      <Button onPress={submitForm} title="Recuperar a senha" />
    </Screen>
  );
}

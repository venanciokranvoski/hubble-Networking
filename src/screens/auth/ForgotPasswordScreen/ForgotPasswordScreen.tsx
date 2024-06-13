import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ForgotShemaValidation,
  forgotShemaValidation,
} from "./forgotShemaValidation";

import { Screen, Text, Button, FormTextInput } from "@components";
import { useResetNavigationSucess } from "@hooks";

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

  const { control } = useForm<ForgotShemaValidation>({
    resolver: zodResolver(forgotShemaValidation),
    defaultValues: {
      recover_email: "",
    },
    mode: "onChange",
  });

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" color="grayBlack" mb="s16">
        Esqueci minha {"\n"}senha
      </Text>
      <Text preset="paragraphLarge" color="grayBlack" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="recover_email"
        label="Seu E-mail para recuperar"
        placeholder="@ Digite seu e-mail"
        boxSetting={{ mb: "s20" }}
      />

      <Button onPress={submitForm} title="Recuperar a senha" />
    </Screen>
  );
}

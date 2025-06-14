import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  forgotShemaValidation,
} from "./forgotShemaValidation";

import { Screen, Text, Button, FormTextInput } from "@components";
import { useResetNavigationSucess } from "@hooks";
import { AuthScreenProps, AuthStackScreenProps,  } from "@routes";
import {  useToastService } from "@services";

import { ForgotPasswordParam, useAuthRequestNewPassword } from "@domain";

  const resetParam: AuthStackScreenProps['SucessScreen'] = {
    title: `Enviamos as instruções ${'\n'} para seu e-mail`,
      description:"Clique no link enviado no seu email para recuperar sua senha",
      icon: {
        name: "MessageRoundIcon",
        color: 'iconColor',
        fillColor: 'iconFillColor'
      },
  };


export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const { reset } = useResetNavigationSucess();
  const { showToast} = useToastService();
  const {requestNewPassword, isLoading, } = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParam),
    onError: message => showToast({message, type: 'error'})
  }
  )
  const { control, formState, handleSubmit } = useForm<ForgotPasswordParam>({
    resolver: zodResolver(forgotShemaValidation),
    defaultValues: {
      email: '',
    },
    mode: "onChange",
  });

  function submitFormm(v: ForgotPasswordParam){
    requestNewPassword(v?.email)
  }

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
        name="email"
        label="Seu E-mail para recuperar"
        placeholder="@ Digite seu e-mail"
        boxSetting={{ mb: "s20" }}
      />

      <Button loading={isLoading} onPress={handleSubmit(submitFormm)} title="Recuperar a senha" />
    </Screen>
  );
}

import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  PasswordInput,
  PasswordInputProps,
} from "../PasswordInput/PasswordInput";

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: "Senha obrigatória",
        minLength: {
          value: 6,
          message: "É permitido criar senhas acima de 6 caracteres!",
        },
      }}
      render={({ field, fieldState }) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}

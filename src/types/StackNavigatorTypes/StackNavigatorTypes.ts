import { IconProps } from "@components";

export type RootStackParamlist = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SucessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, "name" | "color">;
  };
  ForgotPasswordScreen: undefined;
};

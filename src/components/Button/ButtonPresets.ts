import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityVenonProps } from "../Box/Box";
import { ButtonPreset } from "./Button";

interface ButtonUI {
  container: TouchableOpacityVenonProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: "primary",
      },
      content: "primaryContrast",
    },
    disabled: {
      container: {
        backgroundColor: "gray4",
      },
      content: "gray2",
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: "primary",
      },
      content: "primary",
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: "gray4",
      },
      content: "gray4",
    },
  },
};

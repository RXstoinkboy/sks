import { ButtonProps } from "./button.types";
import { ThemedStyledProps } from "styled-components";
import { Theme } from "../../theme";

// TODO: expand condition after adding 'disabled' prop etc
export const setButtonCursor = (
  props: ThemedStyledProps<ButtonProps, Theme>
): string => {
  return "pointer";
};

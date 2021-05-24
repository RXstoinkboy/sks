import styled from "styled-components";
import {
  defaultBorderRadius,
  defaultBoxShadow,
  roundBorderRadius,
} from "../../styleConsts";
import { ButtonProps, ButtonVariant } from "./button.types";
import {
  negativeVariantStyle,
  primaryVariantStyle,
  positiveVariantStyle,
  secondaryVariantStyle,
} from "./button.variants";
import { setButtonCursor } from "./button.utils";

const Button = styled.button<ButtonProps>`
  ${defaultBoxShadow};
  ${({ round }) => (round ? roundBorderRadius : defaultBorderRadius)}
  cursor: ${(props) => setButtonCursor(props)};

  height: 4em;
  width: 4em;
  font-size: 2em;

  ${(props) => {
    switch (props.variant) {
      case ButtonVariant.SECONDARY:
        return secondaryVariantStyle(props);
      case ButtonVariant.POSITIVE:
        return positiveVariantStyle(props);
      case ButtonVariant.NEGATIVE:
        return negativeVariantStyle(props);
      default:
        return primaryVariantStyle(props);
    }
  }}
`;

export { Button, ButtonVariant };

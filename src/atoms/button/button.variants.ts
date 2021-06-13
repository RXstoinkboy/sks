import {
  css,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { Theme } from "../../theme";
import { ButtonProps } from "./button.types";

export const primaryVariantStyle = (
  props: ThemedStyledProps<ButtonProps, Theme>
): FlattenSimpleInterpolation => css`
  border: none;
  color: ${props.theme.background};
  background-color: ${props.theme.primary};
`;

export const positiveVariantStyle = (
  props: ThemedStyledProps<ButtonProps, Theme>
): FlattenSimpleInterpolation => css`
  border: none;
  color: ${props.theme.background};
  background-color: ${props.theme.positive};
`;

export const negativeVariantStyle = (
  props: ThemedStyledProps<ButtonProps, Theme>
): FlattenSimpleInterpolation => css`
  border: none;
  color: ${props.theme.background};
  background-color: ${props.theme.negative};
`;

export const secondaryVariantStyle = (
  props: ThemedStyledProps<ButtonProps, Theme>
): FlattenSimpleInterpolation => css`
  border: 0.3em solid ${props.theme.primary};
  color: ${props.theme.primary};
  background-color: ${props.theme.background};
`;

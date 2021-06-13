import { css } from "styled-components";

type ColorSchema = {
  darkest?: string;
  darker?: string;
  dark?: string;
  basic?: string;
  light?: string;
  lighter?: string;
  lightest?: string;
};

export type ColorMatrix = Record<string, ColorSchema>;

export const colorMatrix: ColorMatrix = {
  gray: {
    darkest: "#000000",
    lightest: "#ffffff",
  },
  green: {
    basic: "green",
  },
  red: {
    basic: "red",
  },
  blue: {
    basic: "blue",
  },
};

export const defaultBorderRadius = css`
  border-radius: 0.3em;
`;

export const roundBorderRadius = css`
  border-radius: 9999em;
`;

export const defaultBoxShadow = css`
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.274);
`;

import { colorMatrix } from "./styleConsts";

// TODO: ten typ jeszcze fajnie byłoby zmienić
export interface Theme {
  background: Required<string | undefined>;
  mainText: Required<string | undefined>;
  primary: Required<string | undefined>;
  positive: Required<string | undefined>;
  negative: Required<string | undefined>;
}

export const lightTheme: Theme = {
  background: colorMatrix.gray.lightest,
  mainText: colorMatrix.gray.darkest,
  negative: colorMatrix.red.basic,
  positive: colorMatrix.green.basic,
  primary: colorMatrix.blue.basic,
};
export const darkTheme: Theme = {
  background: colorMatrix.gray.darkest,
  mainText: colorMatrix.gray.lightest,
  negative: colorMatrix.red.basic,
  positive: colorMatrix.green.basic,
  primary: colorMatrix.blue.basic,
};

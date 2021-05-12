interface Theme {
  background: string;
  mainText: string;
  primary: string;
  positive: string;
  negative: string;
}

const colorMatrix = {
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
};

export const lightTheme: Theme = {
  background: colorMatrix.gray.lightest,
  mainText: colorMatrix.gray.darkest,
  negative: colorMatrix.red.basic,
  positive: colorMatrix.green.basic,
  primary: colorMatrix.gray.darkest,
};
export const darkTheme: Theme = {
  background: colorMatrix.gray.darkest,
  mainText: colorMatrix.gray.lightest,
  negative: colorMatrix.red.basic,
  positive: colorMatrix.green.basic,
  primary: colorMatrix.gray.darkest,
};

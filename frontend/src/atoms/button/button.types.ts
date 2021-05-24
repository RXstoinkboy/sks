export enum ButtonVariant {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  POSITIVE = "POSITIVE",
  NEGATIVE = "NEGATIVE",
}

export interface ButtonProps {
  round?: boolean;
  variant?: ButtonVariant;
  onClick: () => void;
}

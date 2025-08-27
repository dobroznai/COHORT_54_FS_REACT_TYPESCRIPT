import { type ReactNode } from "react";

export type ButtonType = "submit" | "reset" | "button" | undefined;

export interface ButtonProps {
  type?: ButtonType;
  isRed?: boolean;
  disabled?: boolean;
  name: string;
  onClick?: () => void;
  children?: ReactNode;
}

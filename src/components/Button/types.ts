import { type ReactNode } from "react";

export type ButtonType = "submit" | "reset" | "button" | undefined;

export interface ButtonProps {
  type?: ButtonType;
  name: string;
  onClick?: () => void;
  children?: ReactNode;
}

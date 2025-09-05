export type InputType =
  | "string"
  | "text"
  | "password"
  | "email"
  | "number"
  | "search";

import { type ChangeEvent } from "react";

export interface InputProps {
  type?: InputType;
  disabled?: boolean;
  error?: string | undefined;
  id: string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

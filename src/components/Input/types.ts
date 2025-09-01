export type InputType = "text" | "password" | "email" | "number" | "search";

export interface InputProps {
  type?: InputType;
  disabled?: boolean;
  error?: string | undefined;
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
}

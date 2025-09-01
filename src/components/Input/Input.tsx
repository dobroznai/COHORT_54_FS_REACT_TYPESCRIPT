import { Input_wrapper, Input_label, Input_field } from "./styles";
import { type InputProps } from "./types";

function Input({
  error,
  disabled = false,
  id,
  name,
  type,
  placeholder,
  label,
}: InputProps) {
  return (
    <Input_wrapper>
      <Input_label htmlFor={id}>{label}</Input_label>
      <Input_field
        disabled={disabled}
        $error={error}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </Input_wrapper>
  );
}

export default Input;

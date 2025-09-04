import { InputWrapper, InputLabel, InputComponent, ErrorText } from "./styles";
import { type InputProps } from "./types";

function Input({
  error = undefined,
  disabled = false,
  id,
  name,
  type,
  placeholder,
  label,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        disabled={disabled}
        $error={error}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}

export default Input;

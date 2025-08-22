import "./styles.css";
import { type InputProps } from "./types";

function Input({ id, name, type = "text", placeholder, label }: InputProps) {
  return (
    <div className="input_wrapper">
      <label className="input_label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input_field"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

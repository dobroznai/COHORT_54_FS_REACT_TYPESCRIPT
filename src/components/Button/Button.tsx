import { Button_component } from "./styles";
import { type ButtonProps } from "./types";

function Button({
  type = "button",
  name,
  onClick = () => {},
  children,
  isRed = false,
  disabled = false,
}: ButtonProps) {
  return (
    <Button_component
      disabled={disabled}
      $isRed={isRed}
      onClick={onClick}
      type={type}
    >
      {/* {children ? "" : buttonName} */}
      {/* Условный рендеринг*/}
      {!children && name}
      {children}
    </Button_component>
  );
}

export default Button;

import { Button_component } from "./styles";
import { type ButtonProps } from "./types";

function Button({
  type = "button",
  name,
  onClick = () => {},
  children,
}: ButtonProps) {
  return (
    <Button_component onClick={onClick} type={type}>
      {/* {children ? "" : buttonName} */}
      {/* Условный рендеринг*/}
      {!children && name}
      {children}
    </Button_component>
  );
}

export default Button;

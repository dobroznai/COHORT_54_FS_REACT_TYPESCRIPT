import Button from "components/Button/Button";
import { type CounterProps } from "./types";
import { Counter_wrapper, Button_control, Count } from "./Styles";

function Counter({ onMinus, onPlus, count }: CounterProps) {
  return (
    <Counter_wrapper>
      <Button_control>
        <Button name="-" onClick={onMinus} />
      </Button_control>
      <Count>{count}</Count>
      <Button_control>
        <Button name="+" onClick={onPlus} />
      </Button_control>
    </Counter_wrapper>
  );
}

export default Counter;

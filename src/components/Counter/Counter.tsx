import Button from "components/Button/Button";
import { type CounterProps } from "./types";

import "./styles.css";

function Counter({ onMinus, onPlus, count }: CounterProps) {
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;

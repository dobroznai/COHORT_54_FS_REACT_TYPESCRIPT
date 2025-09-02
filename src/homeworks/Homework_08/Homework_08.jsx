import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, ButtonControl, InputControl } from "./styles";

function Homework_08() {
  return (
    <PageWrapper>
      <InputControl>
        <Input
          disabled={false}
          error="Some error"
          id="Input"
          name="homework_08"
        />
      </InputControl>
      <ButtonControl>
        <Button
          disabled={false}
          isRed={false}
          name="Button"
          onClick={() => {}}
        />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Homework_08;

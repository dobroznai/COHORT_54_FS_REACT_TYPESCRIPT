import { PageWrapper, Card, Text, ButtonControl, InputControl } from "./styles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import axios from "axios";

function Lesson_10() {
  return (
    <PageWrapper>
      <InputControl>
        <Input
          id="university"
          name="universityCountry"
          placeholder="Entry country university"
        />
      </InputControl>
      <ButtonControl>
        <Button name="Country" />
      </ButtonControl>

      <Card>
        <Text>Germany</Text>
      </Card>
    </PageWrapper>
  );
}

export default Lesson_10;

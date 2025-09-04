import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { PageWrapper, ElementControl } from "./styles";

function Homework_08_Lesson_09() {
  return (
    <PageWrapper>
      <ElementControl>
        <Button name="Simple Button" />
      </ElementControl>
      <ElementControl>
        <Button isRed name="Delete Button" />
      </ElementControl>
      <ElementControl>
        <Button disabled name="Disabled Button" />
      </ElementControl>
      <ElementControl>
        <Input
          id="simple_input"
          name="simple"
          placeholder="Simple input element"
          label="Simple input"
        />
      </ElementControl>
      <ElementControl>
        <Input
          id="error_input"
          name="error"
          placeholder="Error input element"
          label="Error input"
          error="Some Network Error"
        />
      </ElementControl>
      <ElementControl>
        <Input
          id="disabled_input"
          name="disabled"
          placeholder="Disabled input element"
          label="Disabled input"
          disabled
        />
      </ElementControl>
    </PageWrapper>
  );
}

export default Homework_08_Lesson_09;

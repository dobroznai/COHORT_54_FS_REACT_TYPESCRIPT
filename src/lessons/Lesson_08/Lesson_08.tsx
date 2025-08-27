import Button from "components/Button/Button";
import {
  PageWrapper,
  Paragraph,
  ButtonControl,
  Box1,
  Box2,
  Box3,
} from "./styles";

function Lesson_08() {
  return (
    <PageWrapper>
      <Paragraph>Lesson_08</Paragraph>
      <ButtonControl>
        <Button name="Simple Button" />
      </ButtonControl>
      <ButtonControl>
        {/* <Button isRed={true} name="Delete Button" /> */}
        <Button isRed name="Delete Button" />
      </ButtonControl>
      <ButtonControl>
        <Button
          disabled={true}
          isRed={true}
          name="Disabled Button"
          onClick={() => {
            console.log("Button works ");
          }}
        />
      </ButtonControl>
      <Box1>Box 1</Box1>
      <Box2>Box 2</Box2>
      <Box3>Box 3</Box3>
    </PageWrapper>
  );
}

export default Lesson_08;

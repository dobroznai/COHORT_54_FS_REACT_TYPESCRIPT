import Message from "../Message/Message";
import { CardWrapper, CardTitle } from "./styles";

function Card() {
  const firstName = "Max";
  const lastName = "Mustermann";

  return (
    <CardWrapper>
      <CardTitle>
        {firstName} {lastName}
      </CardTitle>
      <Message />
    </CardWrapper>
  );
}

export default Card;

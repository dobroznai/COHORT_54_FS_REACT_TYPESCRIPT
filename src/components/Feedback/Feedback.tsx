import { type FeedbackProps } from "./types";

import Button from "components/Button/Button";

import {
  Feedback_wrapper,
  Feedback_control,
  Buttonwithcount_container,
  Count,
} from "./styles";

function Feedback({
  onLike,
  onDislike,
  like,
  dislike,
  resetResults,
}: FeedbackProps) {
  return (
    <Feedback_wrapper>
      <Feedback_control>
        <Buttonwithcount_container>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </Buttonwithcount_container>
        <Buttonwithcount_container>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </Buttonwithcount_container>
      </Feedback_control>
      <Button name="Reset Results" onClick={resetResults} />
    </Feedback_wrapper>
  );
}

export default Feedback;

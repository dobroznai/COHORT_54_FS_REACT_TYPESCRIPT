import { type FeedbackProps } from "./types";

import Button from "components/Button/Button";

import "./styles.css";

function Feedback({
  onLike,
  onDislike,
  like,
  dislike,
  resetResults,
}: FeedbackProps) {
  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{like}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislike}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;

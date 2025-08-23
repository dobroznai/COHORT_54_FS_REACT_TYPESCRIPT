import { useState } from "react";

import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [like, setLike] = useState(0); // Если мы ничего не передаем в качестве аргумента функции useState(), то 1 элемент массива, который эта функция возвращает === undefined
  const [dislike, setDislike] = useState(0);

  const onLike = () => {
    setLike((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
    setLike((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
    setLike((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

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

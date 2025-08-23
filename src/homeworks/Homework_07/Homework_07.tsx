import "./styles.css";
import Feedback from "components/Feedback/Feedback";
import { useState } from "react";
// import { type ReactNode } from "react";

function Homework_07() {
  const [like, setLike] = useState<number>(0); // Если мы ничего не передаем в качестве аргумента функции useState(), то 1 элемент массива, который эта функция возвращает === undefined
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number): number => {
      console.log(prevValue);
      return prevValue + 1;
    });
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  const onDislike = (): void => {
    setDislike((prevValue: number): number => prevValue + 1);
  };

  return (
    <div className="homework_07_page_wrapper">
      <Feedback
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
        like={like}
        dislike={dislike}
      />
    </div>
  );
}

export default Homework_07;

// Шаг 1: Импортируем функцию createContext из библиотки react
import { useState, createContext } from "react";
import Button from "components/Button/Button";

import Section from "lessons/Lesson_13/components/Section/Section";

import { MainTitle, MainWrapper } from "./styles";
import { type UserData, type UserDataContext } from "./types";

// ШАГ 2: Создаем контекст - хранилище данных, которое мы хотим передать в любой компонент, который находится уровнем ниже
export const MainContext = createContext<UserDataContext>({
  userData: undefined,
  setUserData: () => {},
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    // Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };

    setUserData(userResponse);
  };

  console.log(userData);

  return (
    // Шаг 3: Обернуть все что у нас в return c помощью MainContext.Provider и передать то что мы хотим в пропсу value
    <MainContext.Provider value={{ userData, setUserData }}>
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get User Data" onClick={getUserData} />
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;

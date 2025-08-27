import "./styles.css";

import { WEATHER_CODES } from "./types";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";
import { useState } from "react";

import { Lesson_07_page_wrapper } from "./styles";

// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props

function Lesson_07() {
  // 12. enum - decode weather code
  // Создайте функцию, которая бы принимала следующие параметры:
  // код погоды и функция decode, которая дает расшифровку погоды по коду.
  // Функция должна возвращать строку, описывающую погоду. Таблица соответствия
  // код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
  // (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
  // (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
  // песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
  // одном из методов switch-case:

  const decode = (weatherCode: string): string => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км)";
      }
      default:
        return "This code doesnt exist";
    }
  };

  const weather = decode(WEATHER_CODES.DS);
  console.log(weather);

  // 13. Generic
  type ArrayGenerator<ValueType> = ValueType[];

  const someStringsArray: ArrayGenerator<string> = ["a", "b", "c"];
  const someNumberArray: ArrayGenerator<number> = [1, 2, 3, 4, 5];
  const someBooleansArray: ArrayGenerator<boolean> = [true, false, true];

  interface AppleType {
    model: string;
    article: number;
  }

  type ItemType = "TV" | "PC";

  interface ShopItem<ValueType, T extends ItemType = ItemType> {
    type: T;
    value: ValueType;
  }

  const item1: ShopItem<number, "TV"> = {
    type: "TV",
    value: 1234567890,
  };

  const item2: ShopItem<string, "PC"> = {
    type: "PC",
    value: "XIAOMI Model 123",
  };

  const item3: ShopItem<AppleType, "PC"> = {
    type: "PC",
    value: {
      model: "apple pro",
      article: 123456789,
    },
  };

  console.log(item1, item2, item3);

  const [count, setCount] = useState<number>(0);
  console.log(count);

  const onMinus = (): void => {
    setCount((prevValue: number): number => prevValue - 1);
  };

  const onPlus = () => {
    setCount((prevValue: number): number => prevValue + 1);
  };

  const sendDataToServer = (): void => {
    // тут мы должны отправить данные счетчика на сервер
    console.log(`Sending ${count} to server`);
  };

  return (
    <Lesson_07_page_wrapper>
      <Button name="SEND" onClick={sendDataToServer} />
      <Input
        id="test-id"
        name="test"
        label="test label"
        placeholder="Test Placeholder"
      />
      <Counter onMinus={onMinus} onPlus={onPlus} count={count} />
    </Lesson_07_page_wrapper>
  );
}

export default Lesson_07;

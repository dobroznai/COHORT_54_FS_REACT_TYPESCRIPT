import "./styles.css";
import { WEATHER_CODES } from "./types";
// import { type ReactNode } from "react";

// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props

function Lesson_07() {
  // 12. enum
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
        return "песчаная буря (видимость менее 10 км) ";
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

  // Generic with objects

  interface AppleType {
    model: string;
    article: number;
  }
  // Це літеральний тип.
  //Він каже: змінна може бути тільки "TV" або "PC".
  type ItemType = "TV" | "PC";

  //	•	T extends ItemType = ItemType → означає, що type має бути або "TV", або "PC".
  //	•	extends ItemType → обмеження, щоб T не був довільним рядком.
  //	•	= ItemType → значення за замовчуванням (якщо не передати другий generic).
  interface ShopItem<ValueType, T extends ItemType = ItemType> {
    type: T;
    value: ValueType;
  }

  //   interface ShopItems<ValueType> {
  //     type: string;
  //     value: ValueType;
  //   }

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

  // interface ShopItems
  // type: string;
  // value: ValueType;
  // }

  // const item1: ShopItems = {
  // type: "TV",
  // value: 1234567890,
  // };

  // const item2: ShopItems = {
  // type: "PC",
  // value: "Xiaomi Model 123",
  // };

  // const item3: ShopItems = {
  // type: "PC",
  // value: {
  // model: "Apple Pro Book",
  // articul: 1235425234,
  // },
  // };

  // const [count, setCount] = useState(0);

  // const onMinus = () => {
  // // Тут пишем логику по уменьшению значения счетчика на 1
  // setCount((prevValue: number) => {
  // return prevValue - 1;
  // });
  // };
  // const onPlus = () => {
  // // Тут пишем логику по увеличению значения счетчика на 1
  // setCount((prevValue: number) => {
  // return prevValue + 1;
  // });
  // };

  // const sendDataToServer = () => {
  // // тут мы должны отправить данные счетчика на сервер
  // console.log(Sending ${count} to server);
  // };

  return <div className="lesson_07_page_wrapper"></div>;
}
export default Lesson_07;

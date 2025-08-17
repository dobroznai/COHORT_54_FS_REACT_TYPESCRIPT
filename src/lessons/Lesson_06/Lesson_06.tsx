import "./styles.css";

function Lesson_06() {
  // 1 тип: string - строковый
  let userFullName: string = "John Johnson";
  //   userFullName = 30; // будет ошибка!!

  let hello = `Hello, ${userFullName}`; // Если мы явно не прописываем тип дапнных для переменной при ее создании, то тип назвначается автоматически, в зависимости от,того что за тип данных первым попал в переменную
  console.log(hello);
  // hello = 30; // будет ошибка
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  // 2 тип: number - числовой
  let number1: number = 100;
  console.log(number1);
  let number2: number = 39.5;
  console.log(number2);
  //   number1 = "200"; -будет ошибка
  ////////////////////////////////////////////////////////////////////////////////////////
  // 3. boolean - буленовский
  let isAdmin: boolean = true;
  isAdmin = false;
  /////////////////////////////////////////////////////////////////////////////////
  // 4. массив
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  // animals.push(100); // будет ошибка

  const numbers: number[] = [1, 2, 3, 4, 5];
  console.log(numbers);

  ////////////////////////////////////////////////////////////////////
  //   5. tupel
  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];

  //   userArray[0] = true; // будет ошибка

  ///////////////////////////////////////////////////////////////////////
  // 6. functions
  // 6.1 ф-я, которая что-то выполняет, но ничего не возвращает
  // 1 способ типизации - используем его
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };
  // 2 cпособ типизации
  //   const sayHi: (personName: string) => void = (personName) => {
  //     console.log(`Hello, ${personName}`);
  //   };

  // 6.2 функции, которые что-то возвращают
  const add = (a: number, b: number): number => {
    return a + b;
  };

  //   add(3, "qwe"); // будет ошибка

  /////////////////////////////////////////////////////////////////////////////////
  // 7. any - любой
  let anyVariable: any = "hello";
  anyVariable = 300;
  anyVariable = true;

  ///////////////////////////////////////////
  // 8. null и undefined
  let userName: null | string;

  userName = "qwe";

  let userAge: undefined | number = undefined;

  userAge = 30;
  ///////////////////////////////////////////
  // 9. object

  interface Admin {
    isAdmin: boolean;
  }

  interface User extends Admin {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
    pet?: string;
  }

  // Можно дописать свойства в интерфейсе
  interface User {
    isFamily: boolean;
  }

  const user1: User = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    job: "QA",
    isAdmin: true,
    isFamily: true,
  };

  const user2: User = {
    firstName: "Brat",
    lastName: "Pitt",
    age: 30,
    job: "Frontend",
    isAdmin: true,
    isFamily: true,
  };

  /////////////////////////////////////////////////////////////////////
  // 10 - type
  type GlobalAnimalProps = {
    isAnimal: boolean;
  };

  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
    speed?: string;
  };

  const animal1: Animal | GlobalAnimalProps = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  ///////
  // type позволяет создавать собственные типы или комбинации типов
  type UserDataFromServerType = User | null | undefined;
  let userDataFromServer: UserDataFromServerType;
  userDataFromServer = null;
  userDataFromServer = undefined;
  userDataFromServer = {
    firstName: "Brat",
    lastName: "Pitt",
    age: 30,
    job: "Frontend",
    isAdmin: true,
    isFamily: true,
  };

  return (
    <div className="lesson_06_page_wrapper">
      Lesson 06
      {userFullName}
    </div>
  );
}

export default Lesson_06;

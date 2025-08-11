function Lesson_06() {
  // 1 тип: string - строковий
  let UserFullName: string = "John Johnson";
  //   UserFullName = 30; // будет ошибка!!!

  //   let hello = "Hello, ${userFullName}"; // Если мы явно не прописываем тип данных для переменной при ее создании то тип переменной назначаетмя автоматически.
  // hello = 30; // будет ошибка
  ////////////////////////////////////////////////////////////////////////////////////

  // 2 тип: number - числовой
  let number1: number = 100;
  console.log(number1);
  let number2 = 39.5;
  console.log(number2);
  // number1 = "200"; - будет ошибка
  ////////////////////////////////////////////////////////////////////////////////////

  // 3. boolean
  let isAdmin: boolean = true;
  isAdmin = false;
  ////////////////////////////////////////////////////////////////////////////////////
  // 4. массив
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  //   animals.push(100); // будет ошибка

  const numbers: number[] = [1, 2, 3, 4, 5];
  console.log(numbers);
  ////////////////////////////////////////////////////////////////////////////////////
  //   5.tupe1
  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
  ] = ["name", "John", "age", 30, "name", "Ivan", "age", 40];
  ////////////////////////////////////////////////////////////////////////////////////
  //   6. functions
  // 6.1. ф-я которая выполняет но ничего не возвращает
  // 1 способ типизации
  const sayHi = (personNamel: string): void => {
    console.log("Hello, ${personName}");
  };
  // 6.2 ф-я которая что то возвращает
  const add = (a: number, b: number): number => {
    return a + b;
  };
  ////////////////////////////////////////////////////////////////////////////////////
  // 7. any - любой
  let anyVariable: any = 300;
  anyVariable = true;
  anyVariable = "hello";
  ////////////////////////////////////////////////////////////////////////////////////
  // 8. null / undefined

  let userName: null | string;
  userName = "qwe";

  let userAge: undefined | number = undefined;
  userAge = 30;
  ////////////////////////////////////////////////////////////////////////////////////
  // 9. Objects
  interface Admin {
    isAdmin: boolean;
  }

  interface User extends Admin {
    firstName: string;
    lastName: String;
    age: number;
    job: string;
    isAdmin: boolean;
    pet?: string;
  }

  interface User {
    isAdmin: boolean;
  }

  const user1: User = {
    firstName: "john",
    lastName: "Johnson",
    age: 30,
    job: "QA",
    isAdmin: true,
    pet: "Dog",
  };

  ////////////////////////////////////////////////////////////////////////////////////
  // 10. type
  type Animal = {
    type: string;
    age: number1;
    color: string;
    isWild: boolean;
    speed?: string;
  };

    const animal1: Animal = {
        isAnimal: true,0

  };

  return (
    <div className="lesson_06_page_wrapper">
      Lesson_06
      {UserFullName}
    </div>
  );
}

export default Lesson_06;

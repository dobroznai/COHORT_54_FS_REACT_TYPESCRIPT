// import { type FormEvent, type ChangeEvent, useState } from "react";
// ШАГ 1: импортируем формик из библиотеки формик
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormWrapper, Title, InputContainer } from "./styles";
import { LOGIN_FORM_VALUES } from "./types";

function LoginForm() {
  // ПРИМЕР РАБОТЫ С КОНТРОЛИРУЕМЫМИ ЭЛЕМЕНТАМИ НА СТРАНИЦЕ
  // const [inputValue, setInputvalue] = useState<string>("");

  // const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  // console.log(event.target.value);
  // console.log("onChange value");

  // event.target.value - это то что ввел пользователь с клавиатуры в input элементе
  //   setInputvalue(event.target.value);
  // };

  ///////////////// Код который мы писали ранее до FORMIK//////////////
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };
  // const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const login = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   console.log("Email :", email);
  //   console.log("Password :", password);
  // };
  //////////////////////////////////////////////////////////////////////
  // Валидация с помощью yup
  const vakidationSchema = Yup.object().shape({
    [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
      .required("Email field is required")
      .email("This field should be in email forward"),
    [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
      .required("Password field is required")
      .min(5, "Password field should contain minimum 5 characters")
      .max(20, "Password field should contain maximum 20 characters"),
  });
  /////////////////////////////////////////////////////////////////////
  //  useFormik - возвращает обьект в котором прописаны данные о форме и вспомогательные функции для работы с формой
  // useFormik принимает в качестве аргумента обьект - он является обьязательныи
  // обьект который мы передаем useFormik нужен для настройки обьекта, который возвращает хук useFormik
  // обьект который мы передаем useFormik имеет 2 обьязательных ключа:
  // 1. InitialValues - принимает в качестве значения обьект:
  // - в качестве ключа у нас выступает значение атрибута name в элементах формы
  // - в качестве значения ключа иы прописываем значение по умолчанию которое должно быть в элементе формы
  // 2. onSubmit - это функция которая вызывается на событие submit (при клике на кнопку с type="submit")

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema: vakidationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      // values - это обьект, ключи которого являются значение атрибута name у элемента формы, а значение ключа - это то что ввел пользователь
      // в наших элементах формы.
      console.log(values);
      // helpers - вспомогательные функции, которые мы можем использовать во время событий submit
      // например helpers.resetForm(); - очищает форму от значений (т.е. делает форму по умолчанию)
      console.log(helpers);
      // helpers.resetForm();
      console.log("Submit from formik works!!!");
    },
  });

  console.log(formik);

  // formik.handleSubmit мы прописываем для того чтобы когда мы нажали на кнопку с type="submit",
  // у нас вызвалась функция которую мы прописали в onSubmit
  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputContainer>
        <Input
          id="email_id"
          name={LOGIN_FORM_VALUES.EMAIL}
          // type="email" - мы убираем чтобы добавить свою валидацию
          placeholder="Enter your email"
          label="Email"
          // formik.values.email - мы прописываем чтобы элемент формы получил значение
          // которое пользователь вводит с клавиатуры
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          // formik.handleChange - помогает контолировать ввод пользователя данных с клавиатуры
          // когда пользователь что то вводит, то formik.handleChange записываат данные в formik.values.email
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />
        <Input
          id="password_id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputContainer>
      {/* <input value={inputValue} onChange={changeInputValue} /> */}
      <Button type="submit" name="Login" />
    </LoginFormWrapper>
  );
}

export default LoginForm;

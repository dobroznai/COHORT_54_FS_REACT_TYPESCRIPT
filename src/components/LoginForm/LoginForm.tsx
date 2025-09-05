import { type FormEvent, type ChangeEvent, useState } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormWrapper, Title, InputContainer } from "./styles";

function LoginForm() {
  // ПРИМЕР РАБОТЫ С КОНТРОЛИРУЕМЫМИ ЭЛЕМЕНТАМИ НА СТРАНИЦЕ
  // const [inputValue, setInputvalue] = useState<string>("");

  // const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  // console.log(event.target.value);
  // console.log("onChange value");

  // event.target.value - это то что ввел пользователь с клавиатуры в input элементе
  //   setInputvalue(event.target.value);
  // };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email :", email);
    console.log("Password :", password);
  };
  return (
    <LoginFormWrapper onSubmit={login}>
      <Title>Login form</Title>
      <InputContainer>
        <Input
          id="email_id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          id="password_id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={password}
          onChange={changePassword}
        />
      </InputContainer>
      {/* <input value={inputValue} onChange={changeInputValue} /> */}
      <Button type="submit" name="Login" />
    </LoginFormWrapper>
  );
}

export default LoginForm;

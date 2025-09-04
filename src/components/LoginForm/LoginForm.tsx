import { type FormEvent } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormWrapper, Title, InputContainer } from "./styles";

function LoginForm() {
  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login started");
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
        />
        <Input
          id="password_id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </InputContainer>
      <Button type="submit" name="Login" />
    </LoginFormWrapper>
  );
}

export default LoginForm;

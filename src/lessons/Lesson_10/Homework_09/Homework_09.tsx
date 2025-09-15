import { useState, useEffect } from "react";
import axios from "axios";

import Button from "components/Button/Button";

import { RANDOM_JOKE_URL } from "./data";
import { PageWrapper, Text, JokeContainer, Card, ErrorText } from "./styles";

function Homework_09() {
  const [joke, setJoke] = useState<undefined | string>(undefined);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const getJoke = async () => {
    setJoke(undefined);
    setError(undefined);
    setIsDisabled(true);
    ////////////////////////////////////////////////////////
    // Пример запроса через библиотеку axios
    try {
      const response = await axios.get(RANDOM_JOKE_URL);
      const data = response.data;
      // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error: any) {
      // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
      console.log(error);
      setError(error.message);
    } finally {
      setIsDisabled(false);
    }
    ///////////////////////////////////////////////////////////
    // Пример запроса через метод fetch()
    // const response = await fetch(RANDOM_JOKE_URL);
    // // В данный момент в result будет леажть либо ошибка(promise венет статус rejected), либо успешно пришедшие данные(promise вернет статут fullfiled)
    // const result = await response.json();

    // if (response.ok) {
    //   // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
    //   setIsDisabled(false);
    //   setJoke(`${result.setup} ${result.punchline}`);
    // } else {
    //   // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
    //   setIsDisabled(false);
    //   setError("Some Network Error");
    // }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <JokeContainer>
          {!!joke && <Text>{joke}</Text>}
          {!!error && <ErrorText>{error}</ErrorText>}
        </JokeContainer>
        <Button disabled={isDisabled} name="Get new joke" onClick={getJoke} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;

import { useEffect, useState } from "react";
import { PageWrapper, ContainerFacts, Text, Card } from "./styles";
import { type Joke } from "./types";
import Button from "components/Button/Button";

const RANDOM_JOKE_URL: string =
  "https://official-joke-api.appspot.com/random_joke";
const ERROR: string = "Some Network Error";

function Homework_09() {
  const [randomJoke, setRandomJoke] = useState<Joke | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const [clicked, setClicked] = useState<boolean>(false);

  const getRandomJoke = async () => {
    const response = await fetch(RANDOM_JOKE_URL, {
      method: "GET",
    });
    const result = await response.json();
    console.log(response);

    if (response.ok) {
      setRandomJoke(result);
    } else {
      setError(ERROR);
    }
  };

  // MOUNTAIN
  useEffect(() => {
    getRandomJoke();
  }, []);

  //UPDATING
  useEffect(() => {
    if (clicked) {
      getRandomJoke();
      setClicked(false);
    }
  }, [clicked]);

  return (
    <PageWrapper>
      <Card>
        <ContainerFacts>
          <Text>
            {error ? ERROR : `${randomJoke?.setup} - ${randomJoke?.punchline}`}
          </Text>
        </ContainerFacts>
        <Button
          name="New Joke"
          onClick={() => {
            setClicked(true);
          }}
        />
      </Card>
    </PageWrapper>
  );
}
export default Homework_09;

import {
  PageWrapper,
  Card,
  Text,
  ButtonControl,
  InputControl,
  ErrorText,
  CardWrapper,
} from "./styles";
import { UNIVERSITIES_URL, ERROR_MESSAGE } from "./data";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

import axios from "axios";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function Lesson_10() {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<any[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const getUniversitiesInformation = async () => {
    setUniversities([]);
    setIsDisabled(true);
    setError(undefined);
    try {
      const response = await axios.get(
        `${UNIVERSITIES_URL}?country=${country}`
      );
      //   console.log(response.data);
      const data = response.data;

      setUniversities(data.slice(0, 15));
    } catch (error: any) {
      setError(ERROR_MESSAGE);
      setUniversities([]);
    } finally {
      setIsDisabled(false);
    }
  };

  // MOUNTING
  useEffect(() => {
    if (country) {
      getUniversitiesInformation();
    }
  }, []);

  // UPDATING
  useEffect(() => {
    if (isDisabled) {
      getUniversitiesInformation();
      setIsDisabled(false);
    }
  }, [isDisabled]);

  //UNMOUNTING
  useEffect(() => {
    return () => {
      console.log("UNMOUTING");
    };
  }, []);

  return (
    <PageWrapper>
      <InputControl>
        <Input
          id="university"
          name="universityCountry"
          placeholder="Enter Country for searching uneversities"
          label="Country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
      </InputControl>
      <ButtonControl>
        <Button
          disabled={isDisabled}
          name="Get Universities"
          onClick={() => {
            setIsDisabled(true);
          }}
        />
      </ButtonControl>
      {!!error && <ErrorText>{error}</ErrorText>}
      <CardWrapper>
        {universities.map((uni) => (
          <Card key={v4()}>
            <Text>{uni.name}</Text>
            <Text>{uni.country}</Text>
            <Text>{uni.web_pages}</Text>
          </Card>
        ))}
      </CardWrapper>
    </PageWrapper>
  );
}

export default Lesson_10;

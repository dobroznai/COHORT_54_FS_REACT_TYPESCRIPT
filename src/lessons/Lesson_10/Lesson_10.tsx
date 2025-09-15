import {
  PageWrapper,
  Card,
  Text,
  ButtonControl,
  InputControl,
  ErrorText,
  CardWrapper,
  TextUniversityName,
} from "./styles";
import { UNIVERSITIES_URL, ERROR_MESSAGE } from "./data";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { type University } from "./types";

import axios from "axios";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function Lesson_10() {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const getUniversitiesInformation = async () => {
    setUniversities([]);
    setIsDisabled(true);
    setError(undefined);
    try {
      const response = await axios.get(
        `${UNIVERSITIES_URL}?country=${country.trim()}`
      );
      const data = response.data;
      if (data.length === 0) {
        setError("No universities found matching your request");
      }

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

  //UNMOUNTING
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <PageWrapper>
      {!!error && <ErrorText>{error}</ErrorText>}
      <InputControl>
        <Input
          id="university"
          name="universityCountry"
          type="text"
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
          onClick={async () => {
            if (!country.trim()) {
              setError("Please enter a country");
              return;
            }
            await getUniversitiesInformation();
          }}
        />
      </ButtonControl>

      <CardWrapper>
        {universities.map((uni: University) => (
          <Card key={v4()}>
            <TextUniversityName>{uni.name}</TextUniversityName>
            {uni.web_pages.map((url, index) => (
              <Text key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </Text>
            ))}
          </Card>
        ))}
      </CardWrapper>
    </PageWrapper>
  );
}

export default Lesson_10;

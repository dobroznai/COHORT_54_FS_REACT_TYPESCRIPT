import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function About() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  }

  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
      <ButtonControl>
        <Button onClick={goToHomePage} name="Go to Home page" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;

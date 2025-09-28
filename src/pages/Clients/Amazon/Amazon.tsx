import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  CardInfo,
  Text,
  ButtonControl,
  Logo,
  LogoImg,
} from "./styles";
import Button from "components/Button/Button";

function Amazon() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <CardInfo>
        <Logo
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="logo"
          />
        </Logo>
        <Text>
          American multinational technology company focusing on e-commerce,
          cloud computing, and AI.
        </Text>
      </CardInfo>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Amazon;

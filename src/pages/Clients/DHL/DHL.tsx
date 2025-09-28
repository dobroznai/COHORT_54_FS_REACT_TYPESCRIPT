import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  CardInfo,
  Text,
  ButtonControl,
  Logo,
  LogoImg,
} from "../Amazon/styles";
import Button from "components/Button/Button";

function DHL() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <CardInfo>
        <Logo
          href="https://www.dhl.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/250px-DHL_Logo.svg.png"
            alt="logo"
          />
        </Logo>
        <Text>
          German logistics company providing international courier, parcel, and
          express mail services.
        </Text>
      </CardInfo>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}
export default DHL;

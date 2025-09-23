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

function UPS() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <CardInfo>
        <Logo
          href="https://www.ups.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/150px-United_Parcel_Service_logo_2014.svg.png"
            alt="logo"
          />
        </Logo>
        <Text>
          American multinational shipping and supply chain management company.
        </Text>
      </CardInfo>
      <ButtonControl>
        <Button onClick={goBack} name="Go Back" />
      </ButtonControl>
    </PageWrapper>
  );
}
export default UPS;

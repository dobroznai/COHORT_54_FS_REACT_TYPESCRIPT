import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { PageWrapper, Logo, LogoImg } from "./styles";
import { ROUTES } from "constants/routes";

function Clients() {
  const navigate = useNavigate();
  const goToDHL = () => {
    navigate(ROUTES.DHL);
  };
  const goToAmazon = () => {
    navigate(ROUTES.AMAZON);
  };
  const goToUPS = () => {
    navigate(ROUTES.UPS);
  };

  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Unmounting Clients Component");
    };
  }, []);

  return (
    <PageWrapper>
      <Logo onClick={goToDHL}>
        <LogoImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/250px-DHL_Logo.svg.png"
          alt="logo"
        />
      </Logo>
      <Logo onClick={goToAmazon}>
        <LogoImg
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="logo"
        />
      </Logo>
      <Logo onClick={goToUPS}>
        <LogoImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/150px-United_Parcel_Service_logo_2014.svg.png"
          alt="logo"
        />
      </Logo>
    </PageWrapper>
  );
}
export default Clients;

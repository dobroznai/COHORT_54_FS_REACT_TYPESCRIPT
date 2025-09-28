import ClientTemplate from "../components/ClientTemplate/ClientTemplate";
import { Text, Logo, LogoImg } from "./styles";

function UPS() {
  return (
    <ClientTemplate>
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
    </ClientTemplate>
  );
}
export default UPS;

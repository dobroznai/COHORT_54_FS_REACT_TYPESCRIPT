import ClientTemplate from "../components/ClientTemplate/ClientTemplate";
import { Text, Logo, LogoImg } from "../Amazon/styles";

function DHL() {
  return (
    <ClientTemplate>
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
    </ClientTemplate>
  );
}
export default DHL;

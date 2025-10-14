import ClientTemplate from "pages/Clients/components/ClientTemplate/ClientTemplate";
import { Logo, LogoImg, Text } from "./styles";

function Amazon() {
  return (
    <ClientTemplate>
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
        American multinational technology company focusing on e-commerce, cloud
        computing, and AI.
      </Text>
    </ClientTemplate>
  );
}
export default Amazon;

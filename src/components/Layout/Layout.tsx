import { useNavigate } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  NavigationContainer,
  HeaderLink,
  FooterLogo,
  FooterLink,
  FooterNavigation,
} from "./styles";

import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomepage}>
          <LogoImg
            src="https://www.ttspl.in/wp-content/uploads/2025/02/logistics-in-india-1080x675.jpg"
            alt="logo"
          />
        </Logo>
        <NavigationContainer>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/contactUs"
          >
            Contact Us
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/login"
          >
            Login
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients"
          >
            Clients
          </HeaderLink>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://www.ttspl.in/wp-content/uploads/2025/02/logistics-in-india-1080x675.jpg"
            alt="logo"
          />
        </FooterLogo>
        <FooterNavigation>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}
export default Layout;

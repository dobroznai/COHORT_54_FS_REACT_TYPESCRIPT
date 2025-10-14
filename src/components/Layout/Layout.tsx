import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { NAVIGATION_MENU_ROUTES } from "constants/routes";

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
  navLinkProps,
} from "./styles";

import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };

  // 1 version
  // const routeKeys = Object.keys(NAVIGATION_MENU_ROUTES);

  // const footerLinks = routeKeys.map((route) => {
  //   return (
  //     <FooterLink
  //       key={v4()}
  //       to={
  //         NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]
  //       }
  //     >
  //       {route}
  //     </FooterLink>
  //   );
  // });

  // 2 version
  const footerLinks = Object.keys(NAVIGATION_MENU_ROUTES).map((route) => {
    return (
      <FooterLink
        key={v4()}
        to={
          NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]
        }
      >
        {route}
      </FooterLink>
    );
  });

  const headerLink = Object.keys(NAVIGATION_MENU_ROUTES).map((route) => {
    return (
      <HeaderLink
        style={({ isActive }) => navLinkProps(isActive)}
        key={v4()}
        to={
          NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]
        }
      >
        {route}
      </HeaderLink>
    );
  });
  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomepage}>
          <LogoImg
            src="https://www.ttspl.in/wp-content/uploads/2025/02/logistics-in-india-1080x675.jpg"
            alt="logo"
          />
        </Logo>
        <NavigationContainer>{headerLink}</NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://www.ttspl.in/wp-content/uploads/2025/02/logistics-in-india-1080x675.jpg"
            alt="logo"
          />
        </FooterLogo>
        <FooterNavigation>{footerLinks}</FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}
export default Layout;

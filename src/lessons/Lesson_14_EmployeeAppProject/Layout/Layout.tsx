import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 } from "uuid";

import { NAVIGATION_MENU_ROUTES } from "../constants/routes";
import { EmployeeContext } from "../context/EmployeeContext";
import { type EmployeeData } from "../CreateEmployee/types";
import AppLogoImg from "../assets/Logo.png";

import {
  LayoutWrapper,
  Header,
  Logo,
  LogoImg,
  NavigationContainer,
  HeaderLink,
  Main,
  navlinkProps,
} from "./styles";

import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  const [employeeData, setEmployeeData] = useState<EmployeeData | undefined>(
    undefined
  );

  const routesKey = Object.keys(NAVIGATION_MENU_ROUTES);
  // Build header navigation from the route map.
  const headerLinks = routesKey.map((route) => {
    const linkRoutes =
      NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES];
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }) => navlinkProps(isActive)}
        to={linkRoutes}
      >
        {route}
      </HeaderLink>
    );
  });

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToMainPage}>
          <LogoImg src={AppLogoImg} alt="Logo App" />
        </Logo>
        <NavigationContainer>{headerLinks}</NavigationContainer>
      </Header>
      <Main>
        {/* Provide shared employee state to all lesson pages. */}
        <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
          {children}
        </EmployeeContext.Provider>
      </Main>
    </LayoutWrapper>
  );
}

export default Layout;

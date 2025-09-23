import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  background-color: rgb(0, 10, 66, 0.9);
  padding: 20px 40px;
  color: white;
`;
export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;

export const Logo = styled.div`
  height: 100%;
  width: 80px;

  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  /* align-items: center; */
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  font-size: 25px;
  font-weight: normal;
  text-decoration: none;
`;
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  border-top: 1px solid black;
  background-color: rgb(0, 10, 66, 0.9);
  padding: 20px 40px;
  color: white;
`;

export const FooterLogo = styled.div`
  height: 80px;
  width: 80px;
  cursor: pointer;
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: white;

  font-size: 20px;
`;

export const PageNotFound = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 40px;
`;

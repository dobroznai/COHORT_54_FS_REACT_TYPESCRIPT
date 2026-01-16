import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border: 2px solid rgba(0, 0, 0, 1);
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  padding: 20px 40px;
  color: white;
  background-color: rgba(250, 249, 255, 1);
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
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  color: black;
  font-size: 28px;
  font-weight: normal;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 34, 51, 1);
`;

export const navlinkProps = (isActive: boolean) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});

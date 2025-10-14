interface ROUTES_DATA {
  HOME: string;
  CONTACT_US: string;
  ABOUT: string;
  LOGIN: string;
  CLIENTS: string;
  DHL: string;
  AMAZON: string;
  UPS: string;
  NOT_FOUND: string;
}

export const ROUTES: ROUTES_DATA = {
  HOME: "/",
  CONTACT_US: "/contactUs",
  ABOUT: "/about",
  LOGIN: "/login",
  CLIENTS: "/clients",
  DHL: "/clients/dhl",
  AMAZON: "/clients/amazon",
  UPS: "/clients/ups",
  NOT_FOUND: "*",
};

export enum NAVIGATION_MENU_ROUTES {
  Home = "/",
  "Contact Us" = "/contactUs",
  About = "/about",
  Login = "/login",
  Clients = "/clients",
}

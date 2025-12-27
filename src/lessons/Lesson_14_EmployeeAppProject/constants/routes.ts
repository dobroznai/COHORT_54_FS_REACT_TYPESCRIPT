interface ROUTES_DATA {
  HOME: string;
  CREATE_EMPLOYEE: string;
  EMPLOYEES: string;
  NOT_FOUND: string;
}

export const ROUTES: ROUTES_DATA = {
  HOME: "/",
  CREATE_EMPLOYEE: "/createEmployee",
  EMPLOYEES: "/employees",
  NOT_FOUND: "*",
};

export enum NAVIGATION_MENU_ROUTES {
  "Create Employee" = "/createEmployee",
  Employees = "/employees",
}

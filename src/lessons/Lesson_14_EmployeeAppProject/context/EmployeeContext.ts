import { createContext } from "react";

import { type EmployeeContextValue } from "./types";

export const EmployeeContext = createContext<EmployeeContextValue | undefined>(
  undefined
);

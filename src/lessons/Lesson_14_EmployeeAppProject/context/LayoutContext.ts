import { createContext } from "react";

import { type EmployeeContextValue } from "./types";

export const LayoutContext = createContext<EmployeeContextValue | undefined>(
  undefined
);

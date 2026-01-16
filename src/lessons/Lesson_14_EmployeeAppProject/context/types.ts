import type { EmployeeData } from "../CreateEmployee/types";
import { type Dispatch, type SetStateAction } from "react";

export interface EmployeeContextValue {
  employeeData: EmployeeData[];
  setEmployeeData: Dispatch<SetStateAction<EmployeeData[]>>;
}

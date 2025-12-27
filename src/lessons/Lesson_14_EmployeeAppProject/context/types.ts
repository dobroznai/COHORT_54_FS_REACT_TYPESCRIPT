import type { EmployeeData } from "../CreateEmployee/types";

export interface EmployeeContextValue {
  employeeData: EmployeeData | undefined;
  setEmployeeData: (data: EmployeeData | undefined) => void;
}

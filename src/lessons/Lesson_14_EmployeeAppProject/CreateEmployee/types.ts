export interface EmployeeData {
  id: string;
  name: string | undefined;
  surname: string | undefined;
  age: string | undefined;
  job: string | undefined;
}

export interface CreateEmployeeFormValues {
  name: string;
  surname: string;
  age: string;
  job: string;
}

export const CREATE_EMPLOYEE_INITIAL_VALUES: CreateEmployeeFormValues = {
  name: "",
  surname: "",
  age: "",
  job: "",
};

export enum CREATE_EMPLOYEE_FORM_VALUES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  JOB = "job",
}

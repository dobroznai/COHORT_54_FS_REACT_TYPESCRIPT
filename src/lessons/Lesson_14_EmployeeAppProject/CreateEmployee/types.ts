export interface EmployeeData {
  name: string | undefined;
  surname: string | undefined;
  age: string | undefined;
  job: string | undefined;
}

export enum CREATE_EMPLOYEE_FORM_VALUES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  JOB = "job",
}

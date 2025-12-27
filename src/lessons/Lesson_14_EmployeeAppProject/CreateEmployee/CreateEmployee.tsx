import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { EmployeeContext } from "../context/EmployeeContext";
import { FormContainer, InputsContainer } from "./styles";
import {
  type CreateEmployeeFormValues,
  CREATE_EMPLOYEE_FORM_VALUES,
  CREATE_EMPLOYEE_INITIAL_VALUES,
} from "./types";

function CreateEmployee() {
  const employeeContext = useContext(EmployeeContext);
  if (!employeeContext) {
    return null;
  }
  const { setEmployeeData } = employeeContext;

  const validationSchema = Yup.object().shape({
    [CREATE_EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
      .required("Name is required")
      .min(2, "Name field should contain minimum 2 characters")
      .max(50, "Name field should contain maximum 50 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
      .required("Surname is required")
      .max(15, "Surname field should contain maximum 15 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
      .required("Age is required")
      .min(1, "Age field should contain minimum 1 character")
      .max(3, "Age field should contain maximum 3 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.JOB]: Yup.string().max(
      30,
      "Job position field should contain maximum 30 characters"
    ),
  });

  const formik = useFormik<CreateEmployeeFormValues>({
    initialValues: CREATE_EMPLOYEE_INITIAL_VALUES,
    validationSchema,
    onSubmit: (values, helpers) => {
      setEmployeeData(values);
      helpers.resetForm();
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="name"
          name={CREATE_EMPLOYEE_FORM_VALUES.NAME}
          type="text"
          placeholder="Enter name"
          label="Name*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.NAME]}
        />
        <Input
          id="surname"
          name={CREATE_EMPLOYEE_FORM_VALUES.SURNAME}
          type="text"
          placeholder="Enter surname"
          label="Surname*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]}
        />
        <Input
          id="age"
          name={CREATE_EMPLOYEE_FORM_VALUES.AGE}
          type="text"
          placeholder="Enter age"
          label="Age*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.AGE]}
        />
        <Input
          id="job"
          name={CREATE_EMPLOYEE_FORM_VALUES.JOB}
          type="text"
          placeholder="Enter job position"
          label="Job Position"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.JOB]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.JOB]}
        />
      </InputsContainer>
      <Button type="submit" name="Create" />
    </FormContainer>
  );
}

export default CreateEmployee;

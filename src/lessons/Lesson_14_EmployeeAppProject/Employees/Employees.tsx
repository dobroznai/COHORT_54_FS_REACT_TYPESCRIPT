import { useContext } from "react";

import { EmployeeContext } from "../context/EmployeeContext";
import {
  CardWrapper,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
} from "./styles";

function Employees() {
  const employeeContext = useContext(EmployeeContext);
  if (!employeeContext) {
    return null;
  }

  const { employeeData } = employeeContext;
  if (!employeeData) {
    return null;
  }

  return (
    <CardWrapper>
      <CardInfo>
        <CardInfoTitle>Name</CardInfoTitle>
        <CardInfoContent>{employeeData.name}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Surname</CardInfoTitle>
        <CardInfoContent>{employeeData.surname}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Age</CardInfoTitle>
        <CardInfoContent>{employeeData.age}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Job Position</CardInfoTitle>
        <CardInfoContent>{employeeData.job || "-"}</CardInfoContent>
      </CardInfo>
    </CardWrapper>
  );
}

export default Employees;

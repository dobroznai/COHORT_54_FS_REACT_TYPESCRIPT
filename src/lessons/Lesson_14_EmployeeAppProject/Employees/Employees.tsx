import { useContext } from "react";
import Button from "components/Button/Button";

import { LayoutContext } from "../context/LayoutContext";
import {
  PageWrapper,
  Cards,
  CardWrapper,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
  ButtonControl,
} from "./styles";

function Employees() {
  const employeeContext = useContext(LayoutContext);
  if (!employeeContext) {
    return null;
  }

  const { employeeData, setEmployeeData } = employeeContext;

  // Remove a single employee by id.
  const deleteCard = (id: string) => {
    setEmployeeData((prevValue) =>
      prevValue.filter((employee) => employee.id !== id)
    );
  };
  // Clear all employees.
  const deleteAllCards = () => {
    setEmployeeData([]);
  };

  if (employeeData.length === 0) {
    return null;
  }

  const employeeList = employeeData.map((employee) => (
    <CardWrapper key={employee.id}>
      <CardInfo>
        <CardInfoTitle>Name</CardInfoTitle>
        <CardInfoContent>{employee.name}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Surname</CardInfoTitle>
        <CardInfoContent>{employee.surname}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Age</CardInfoTitle>
        <CardInfoContent>{employee.age}</CardInfoContent>
      </CardInfo>
      <CardInfo>
        <CardInfoTitle>Job Position</CardInfoTitle>
        <CardInfoContent>{employee.job || "-"}</CardInfoContent>
      </CardInfo>

      <Button isRed name="Delete" onClick={() => deleteCard(employee.id)} />
    </CardWrapper>
  ));

  return (
    <PageWrapper>
      <Cards>{employeeList}</Cards>
      {!!employeeData.length && (
        <ButtonControl>
          <Button name="Delete All" isRed onClick={deleteAllCards} />
        </ButtonControl>
      )}
    </PageWrapper>
  );
}

export default Employees;

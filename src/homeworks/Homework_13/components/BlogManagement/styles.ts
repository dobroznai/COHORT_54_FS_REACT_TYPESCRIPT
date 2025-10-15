import styled from "@emotion/styled";
import { InputComponent } from "components/Input/styles";

export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 700px;
  height: fit-content;
  width: 700px;
  padding: 20px;
`;

export const CustomInput = styled(InputComponent)`
  height: 100px;
  font-size: 20px;
  &:focus {
    border-color: green;
  }
`;

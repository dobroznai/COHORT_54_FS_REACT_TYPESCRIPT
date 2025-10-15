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
  width: 100%;
  min-height: 120px;
  padding: 10px;
  font-size: 16px;
  resize: vertical; /* ✅ дозволяє лише вертикальне розтягування */
  overflow: auto; /* ✅ додає прокрутку, якщо текст виходить за межі */
  &:focus {
    border-color: green;
  }

  &[as="textarea"] {
    max-width: 100%;
    resize: vertical;
  }
`;

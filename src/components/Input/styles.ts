import styled from "@emotion/styled";

interface InputComponentProps {
  $error: string | undefined;
  disabled: boolean;
}

const generateInputBorderColor = (
  error: string | undefined,
  disabled: boolean | undefined
) => {
  if (disabled) {
    return "rgba(148, 146, 146, 1)";
  } else if (error === "Some error") {
    return "rgba(241, 82, 119, 1)";
  } else {
    return "rgba(0, 0, 0, 1)";
  }
};

export const Input_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 16px;
`;

export const Input_label = styled.label`
  font-size: 16px;
  color: black;
`;

export const Input_field = styled.input<InputComponentProps>`
  padding: 10px 12px;
  border: 1px solid
    ${({ $error, disabled }) => generateInputBorderColor($error, disabled)};
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  height: 50px;

  &:disabled {
    cursor: not-allowed;
  }
`;

import styled from "@emotion/styled";

interface InputComponentProps {
  $error?: string | undefined;
}

const generateInputBorderColor = (
  error: string | undefined,
  disabled: boolean | undefined
) => {
  if (disabled) {
    return "rgba(148, 146, 146, 1)";
  } else if (!!error) {
    return "rgba(241, 82, 119, 1)";
  } else {
    return "rgba(0, 0, 0, 1)";
  }
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentProps>`
  padding: 12px;
  border: 1px solid
    ${({ $error, disabled }) => generateInputBorderColor($error, disabled)};
  border-radius: 4px;
  width: 100%;
  height: 50px;

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }

  &:focus {
    border-color: ${({ $error }) =>
      $error ? "rgba(241, 82, 119, 1)" : "rgba(82, 82, 241, 1)"};
    outline: none;
  }
`;

export const ErrorText = styled.div`
  height: 18px;
  font-size: 16px;
  color: rgba(241, 82, 119, 1);
  text-align: center;
`;

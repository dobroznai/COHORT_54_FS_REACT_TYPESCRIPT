import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isRed: boolean;
}

const generateButtonColor = (isRed: boolean, disabled: boolean | undefined) => {
  if (disabled) {
    return "rgba(167, 167, 167, 1)";
  } else {
    if (isRed) {
      return "rgba(241, 82, 119, 1)";
    } else {
      return "rgb(82, 82, 241)";
    }
  }
};

const generateButtonColorOnHover = (
  isRed: boolean,
  disabled: boolean | undefined
) => {
  if (disabled) {
    return "rgba(167, 167, 167, 1)";
  } else {
    if (isRed) {
      return "rgba(239, 127, 153, 1)";
    } else {
      return "rgba(142, 142, 246, 1)";
    }
  }
};

export const Button_component = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  height: 70px;
  width: 100%;
  background-color: ${({ $isRed, disabled }) =>
    generateButtonColor($isRed, disabled)};
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $isRed, disabled }) =>
      generateButtonColorOnHover($isRed, disabled)};
  }
`;

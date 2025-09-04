import styled from "@emotion/styled";

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  padding: 60px;
  gap: 30px;
  justify-content: center;

  border: 1px, solid, black;
  border-radius: 4px;
  width: 590px;
  min-height: 450px;
  max-height: fit-content;
  background-color: white;
`;

export const Title = styled.p`
  color: black;
  font-size: 24px;
  font-weight: normal;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

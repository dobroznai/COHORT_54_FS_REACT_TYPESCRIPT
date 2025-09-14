import styled from "@emotion/styled";
import universityImg from "assets/university.jpg";
import Button from "components/Button/Button";
import test from "node:test";

export const PageWrapper = styled.div`
  height: 100%;
  background: url(${universityImg}) no-repeat center center fixed;
  background-size: cover;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Text = styled.p`
  display: flex;
  font-size: 16px;
  gap: 15px;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;

export const InputControl = styled.div`
  width: 500px;
  margin: 15px;
`;

export const ErrorText = styled(Text)`
  color: red;
  font-size: 24px;
  font-weight: bold;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

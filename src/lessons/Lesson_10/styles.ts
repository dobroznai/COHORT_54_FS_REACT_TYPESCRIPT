import styled from "@emotion/styled";
import universityImg from "assets/university.jpg";
import Button from "components/Button/Button";

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
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
  min-width: 300px;
  height: fit-content;
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
  width: 300px;
  margin: 15px;
`;

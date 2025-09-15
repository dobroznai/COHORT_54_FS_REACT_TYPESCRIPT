import styled from "@emotion/styled";
import universityImg from "assets/university.jpg";

export const PageWrapper = styled.div`
  height: 100%;
  background: url(${universityImg}) no-repeat center center fixed;
  background-size: cover;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 40px 0 40px 0;
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  width: 350px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

export const Text = styled.p`
  font-size: 16px;
  gap: 15px;
  align-self: center;
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

export const TextUniversityName = styled(Text)`
  color: rgba(19, 125, 255, 0.95);
  font-weight: bold;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

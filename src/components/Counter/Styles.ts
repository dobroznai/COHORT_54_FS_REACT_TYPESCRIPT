import styled from "@emotion/styled";

export const Counter_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 400px;
  height: fit-content;
  border: 2px solid black;
  border-radius: 10px;

  background-color: white;
  padding: 20px;

  color: black;
`;

export const Button_control = styled.div`
  width: 100px;
`;

export const Count = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

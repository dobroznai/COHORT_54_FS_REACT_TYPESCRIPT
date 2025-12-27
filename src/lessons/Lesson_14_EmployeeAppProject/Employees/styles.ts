import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.div`
  display: flex;
  gap: 65px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid black;
  border-radius: 4px;
  width: 635px;
  height: fit-content;
  padding: 60px;
  background-color: white;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardInfoTitle = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: rgba(111, 111, 111, 1);
`;

export const CardInfoContent = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: rgba(28, 28, 28, 1);
`;

export const ButtonControl = styled.div`
  width: 700px;
`;

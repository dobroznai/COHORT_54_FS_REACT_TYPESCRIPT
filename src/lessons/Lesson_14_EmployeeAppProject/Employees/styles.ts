import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid black;
  border-radius: 4px;
  width: 590px;
  height: 470px;
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

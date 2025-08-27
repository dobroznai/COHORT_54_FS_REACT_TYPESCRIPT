import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const commonBoxStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  font-size: 24px;
  font-weight: bolt;
  color: white;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;

export const Box1 = styled.div`
  ${commonBoxStyles}
  background-color: red;
`;

export const Box2 = styled.div`
  ${commonBoxStyles}
  background-color: black;
`;

export const Box3 = styled.div`
  ${commonBoxStyles}
  background-color: blue;
`;

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

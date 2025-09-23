import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
  align-items: center;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 160px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

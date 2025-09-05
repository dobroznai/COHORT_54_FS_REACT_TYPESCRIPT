import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* align-items: center;
  justify-content: center; */
  gap: 30px;
  padding: 40px;
`;

export const ElementControl = styled.div`
  width: 300px;
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

//можно достилизовать компонент: в даном примере мы берем все стили ElementControl + ДОБАВЛЯЕМ СВОИ СТИЛИ

export const DeleteElementControl = styled(ElementControl)`
  width: 400px;
`;

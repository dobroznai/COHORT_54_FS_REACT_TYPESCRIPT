import styled from "@emotion/styled";
import { Button_component } from "components/Button/styles";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 15px;
  margin: 10px 0;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
`;

export const ContentInfo = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap; /* ✅ зберігає перенос рядків із textarea */
  word-break: break-word; /* ✅ переносить довгі слова */
  color: #333333;
`;

/* ✅ Нове — обгортка для фіксованої кнопки */

export const DeleteButtonWrapper = styled(Button_component)`
  position: absolute;
  bottom: 20px;

  width: 200px; /* фіксована ширина */
  z-index: 1000;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }
`;

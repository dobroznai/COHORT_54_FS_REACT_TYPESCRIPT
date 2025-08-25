import styled from "@emotion/styled";

export const Homework_06_page_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(to right, #2e3192, #1bffff);
  padding: 80px;
  flex: 1;
  flex-wrap: wrap;
  gap: 80px;
`;

export const Card_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to right, #02aabd, #00cdac);
  transition: background 500ms ease-in-out;

  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  transition: font-size 1sec, color 1sec;

  width: 300px;
  min-height: 300px;
  max-height: fit-content;
  transition: width 3sec, min-height 6sec;

  border: 2px solid black;
  border-radius: 4px;

  gap: 15px;
  cursor: pointer;
`;

export const Card_wrapper: hover = styled.div`
  background: linear-gradient(45deg, #d8b5ff, #1eae98);
  /* width: 310px;
  min-height: 310px; */
  font-size: 25px;
  color: white;
`;

export const Car_info_brand = styled.p`
  font-size: 24px;
  color: rgb(49, 49, 49);
`;

export const Car_info_price = styled.p`
  font-size: 20px;
`;

export const Car_info_isDiesel = styled.p`
  font-size: 20px;
`;

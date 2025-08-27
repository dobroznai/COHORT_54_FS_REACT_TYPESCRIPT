import styled from "@emotion/styled";

export const Homework_06_page_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding: 80px;
`;

export const List_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 8px;
  width: 800px;
  padding: 40px;
  align-items: center;
  gap: 40px;
  background-color: aliceblue;
`;

export const List_title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #1e1e1e;
`;

export const Cars_list = styled.div`
  display: flex;
  gap: 25px;
`;

export const Car_card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const Car_brand = styled.h2`
  margin: 0;
  text-align: center;
  color: #0077cc;
`;

export const Car_price = styled.p`
  margin: 5px 0;
  color: black;
`;

export const Car_fuel = styled.p`
  margin: 5px 0;
  color: black;
`;

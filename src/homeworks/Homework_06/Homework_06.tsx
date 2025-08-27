import {
  Homework_06_page_wrapper,
  List_wrapper,
  List_title,
  Cars_list,
  Car_card,
  Car_brand,
  Car_price,
  Car_fuel,
} from "./styles";
import { v4 } from "uuid";

function Homework_06() {
  interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carList = cars.map((carItem) => (
    <Car_card key={v4()}>
      <Car_brand>{carItem.brand}</Car_brand>
      <Car_price>Price: ${carItem.price}</Car_price>
      <Car_fuel>Diesel: {carItem.isDiesel ? "Yes" : "No"}</Car_fuel>
    </Car_card>
  ));

  return (
    <Homework_06_page_wrapper>
      <List_wrapper>
        <List_title>Cars:</List_title>
        <Cars_list>{carList}</Cars_list>
      </List_wrapper>
    </Homework_06_page_wrapper>
  );
}

export default Homework_06;

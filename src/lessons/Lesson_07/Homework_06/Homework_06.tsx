import { type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { type Car } from "./types";
import { CAR_BRAND } from "./types";
import { FUEL_TYPE } from "./types";

import {
  Homework_06_page_wrapper,
  Card_wrapper,
  Car_info_brand,
  Car_info_price,
  Car_info_isDiesel,
} from "./styles";

function Homework_06() {
  const cars: Car[] = [
    { brand: CAR_BRAND.BMW, price: 20000, fuel: FUEL_TYPE.DIESEL },
    { brand: CAR_BRAND.Mercedes, price: 22000, fuel: FUEL_TYPE.BENZIN },
    { brand: CAR_BRAND.Porshe, price: 50000, fuel: FUEL_TYPE.DIESEL },
    { brand: CAR_BRAND.Nissan, price: 25000, fuel: FUEL_TYPE.BENZIN },
    { brand: CAR_BRAND.Audi, price: 50000, fuel: FUEL_TYPE.DIESEL },
  ];

  const carList: ReactNode = cars.map((car: Car) => (
    <Card_wrapper key={uuidv4()}>
      <Car_info_brand>Brand: {car.brand} </Car_info_brand>
      <Car_info_price>Price: {car.price} $ </Car_info_price>
      <Car_info_isDiesel>
        {/* {car.isDiesel ? FUEL_TYPE.DIESEL : FUEL_TYPE.BENZIN} */}
        {car.fuel}
      </Car_info_isDiesel>
    </Card_wrapper>
  ));

  return <Homework_06_page_wrapper>{carList}</Homework_06_page_wrapper>;
}
export default Homework_06;

import { type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { type Car } from "./types";
import { CAR_BRAND } from "./types";
import { FUEL_TYPE } from "./types";

import "./styles.css";

function Homework_06() {
  const cars: Car[] = [
    { brand: CAR_BRAND.BMW, price: 20000, fuel: FUEL_TYPE.DIESEL },
    { brand: CAR_BRAND.Mercedes, price: 22000, fuel: FUEL_TYPE.BENZIN },
    { brand: CAR_BRAND.Porshe, price: 50000, fuel: FUEL_TYPE.DIESEL },
    { brand: CAR_BRAND.Nissan, price: 25000, fuel: FUEL_TYPE.BENZIN },
    { brand: CAR_BRAND.Audi, price: 50000, fuel: FUEL_TYPE.DIESEL },
  ];

  const carList: ReactNode = cars.map((car: Car) => (
    <div key={uuidv4()} className="card_wrapper">
      <p className="car_info_brand">Brand: {car.brand} </p>
      <p className="car_info_price">Price: {car.price} $ </p>
      <p className="car_info_isDiesel">
        {/* {car.isDiesel ? FUEL_TYPE.DIESEL : FUEL_TYPE.BENZIN} */}
        {car.fuel}
      </p>
    </div>
  ));

  return <div className="homework_06_page_wrapper">{carList}</div>;
}
export default Homework_06;

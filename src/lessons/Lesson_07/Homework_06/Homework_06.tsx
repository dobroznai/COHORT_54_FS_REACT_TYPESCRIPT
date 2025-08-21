import { ReactNode } from React;
import { v4 as uuidv4 } from "uuid";

import "./styles.css";

interface Car {
  brand: string;
  price: number;
  isDiesel: boolean;
}

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carList: ReactNode = cars.map((car: Car) => (
    <div key={uuidv4()} className="card_wrapper">
      <p className="car_info_brand">Brand: {car.brand} </p>
      <p className="car_info_price">Price: {car.price} $ </p>
      <p className="car_info_isDiesel">{car.isDiesel ? "Diesel" : "Benzin"} </p>
    </div>
  ));

  return <div className="homework_06_page_wrapper">{carList}</div>;
}
export default Homework_06;

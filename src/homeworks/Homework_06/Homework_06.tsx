import "./styles.css";
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
    <div key={v4()} className="car_card">
      <h2 className="car_brand">{carItem.brand}</h2>
      <p className="car_price">Price: ${carItem.price}</p>
      <p className="car_fuel">Diesel: {carItem.isDiesel ? "Yes" : "No"}</p>
    </div>
  ));

  return (
    <div className="homework_06_page_wrapper">
      <div className="list_wrapper">
        <h1 className="list_title">Cars:</h1>
        <div className="cars_list">{carList}</div>
      </div>
    </div>
  );
}

export default Homework_06;

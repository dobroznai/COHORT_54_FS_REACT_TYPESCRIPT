export enum CAR_BRAND {
  BMW = "BMW",
  Mercedes = "Mercedes",
  Porshe = "Porshe",
  Nissan = "Nissan",
  Audi = "Audi",
}

export interface Vehicle<TFuel> {
  brand: CAR_BRAND;
  price: number;
  fuel: TFuel;
}

export enum FUEL_TYPE {
  DIESEL = "Diesel",
  BENZIN = "Benzin",
}

export type Car = Vehicle<FUEL_TYPE>;

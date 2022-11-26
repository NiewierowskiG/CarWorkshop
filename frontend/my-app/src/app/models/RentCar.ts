import { SubstituteCar } from './SubstituteCar';
export class RentCar{
  constructor(
    private car: SubstituteCar,
    private startDate:string,
    private endtDate: string,
  ){}
}

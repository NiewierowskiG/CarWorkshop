import { SubstituteCar } from './SubstituteCar';
export class RentCar{
  constructor(
    private car: SubstituteCar,
    private startDate:string,
    private endDate: string,
  ){}
  toJSON() {
    return {
      car: this.car,
      startDate: this.startDate,
      endDate: this.endDate
      }
    };
  }


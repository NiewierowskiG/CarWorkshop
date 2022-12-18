import { SubstituteCar } from './SubstituteCar';
export class RentCar{
  public get endDate(): string {
    return this._endDate;
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public get startDate(): string {
    return this._startDate;
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public get car(): SubstituteCar {
    return this._car;
  }
  public set car(value: SubstituteCar) {
    this._car = value;
  }
  constructor(
    private _car: SubstituteCar,
    private _startDate: string,
    private _endDate: string,
  ){}
  toJSON() {
    return {
      car: this.car,
      startDate: this.startDate,
      endDate: this.endDate
      }
    };
  }


import { Car } from './Car';
export class SubstituteCar{
  public get isRented(): boolean {
    return this._isRented;
  }
  public set isRented(value: boolean) {
    this._isRented = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get car(): Car {
    return this._car;
  }
  public set car(value: Car) {
    this._car = value;
  }
  constructor(
    private _car: Car,
    private _price: number,
    private _isRented: boolean
  ){}
  toJSON() {
    return {
      car: this.car,
      price: this.price,
      isRented: this.isRented
      }
    };
  }


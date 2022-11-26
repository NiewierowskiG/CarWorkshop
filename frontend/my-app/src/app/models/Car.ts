import { CarModel } from './CarModel';
export class Car{
  constructor(
    private _model: CarModel,
    private _color: string,
    private _prod_year: number,
    private _vin: number
  ) {}
  public get vin(): number {
    return this._vin;
  }

  public get prod_year(): number {
    return this._prod_year;
  }

  public get color(): string {
    return this._color;
  }

  public get model(): CarModel {
    return this._model;
  }

}

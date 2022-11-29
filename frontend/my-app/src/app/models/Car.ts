import { CarModel } from './CarModel';
export class Car {

  constructor(
    private _model: CarModel,
    private _color: string,
    private _prodYear: number,
    private _vin: number
  ) { }
  toJson() {
    return {
      model: this.model,
      color: this.color,
      prodYear: this.prodYear,
      vin: this.vin,
    }
  }

  public get vin(): number {
    return this._vin;
  }
  public set vin(value: number) {
    this._vin = value;
  }
  public get prodYear(): number {
    return this._prodYear;
  }
  public set prodYear(value: number) {
    this._prodYear = value;
  }
  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }
  public get model(): CarModel {
    return this._model;
  }
  public set model(value: CarModel) {
    this._model = value;
  }
}

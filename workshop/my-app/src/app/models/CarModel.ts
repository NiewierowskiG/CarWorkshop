import { CarBrand } from "./CarBrand";

export class CarModel{
  constructor(
    private _name: string,
    private _brand: CarBrand,
    private _prodYearStart: number,
    private _prodYearEnd: number
  ) {}
  toJSON() {
    return {
      name: this.name,
      brand: this.brand,
      prodYearStart: this.prodYearStart,
      prodYearEnd: this.prodYearEnd,
      }
    };
  public get prodYearEnd(): number {
    return this._prodYearEnd;
  }
  public set prodYearEnd(value: number) {
    this._prodYearEnd = value;
  }
  public get prodYearStart(): number {
    return this._prodYearStart;
  }
  public set prodYearStart(value: number) {
    this._prodYearStart = value;
  }
  public get brand(): CarBrand {
    return this._brand;
  }
  public set brand(value: CarBrand) {
    this._brand = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

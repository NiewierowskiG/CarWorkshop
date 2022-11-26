import { CarBrand } from "./CarBrand";

export class CarModel{
  constructor(
    private _name: string,
    private _brand: CarBrand,
    private _prodYearStart: number,
    private _prodYearEnd: number
  ) {
  }
  public get modelName(): string {
    return this._name;
  }

  public get prodYearEnd(): number {
    return this._prodYearEnd;
  }

  public get prodYearStart(): number {
    return this._prodYearStart;
  }

  public get brandName(): CarBrand {
    return this._brand;
  }


}
